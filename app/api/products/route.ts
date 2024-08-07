// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import { Product } from '../../../models/Products';
import path from "path";
import { writeFile } from "fs/promises";


export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const filter = category ? { category } : {};

    const products = await Product.find(filter);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', (error as Error).message);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const body = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', (error as Error).message);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export const POST = async (req: NextRequest) => {
  await connectToDatabase();
  const formData = await req.formData();

  const name = formData.get("name");
  const description = formData.get("description");
  const category = formData.get("category");
  const imageArray = JSON.parse(formData.get("images") as string);
  const pdfFiles = formData.getAll("pdfs");

  if (!name || !description || !category) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const pdfFilenames = [];

  for (const file of pdfFiles) {
    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = file.name.replaceAll(" ", "_");
      try {
        await writeFile(
          path.join(process.cwd(), "public/assets/" + filename),
          buffer
        );
        pdfFilenames.push(filename);
      } catch (error) {
        console.log("Error occurred while saving PDF: ", error);
        return NextResponse.json({ error: "Failed to save PDF." }, { status: 500 });
      }
    }
  }

  const newProduct = new Product({
    name,
    description,
    category,
    images: imageArray,
    pdfs: pdfFilenames,
  });

  try {
    await newProduct.save();
    return NextResponse.json({ message: "Product created successfully." }, { status: 201 });
  } catch (error) {
    console.log("Error occurred while saving product: ", error);
    return NextResponse.json({ error: "Failed to create product." }, { status: 500 });
  }
};

export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { id } = body;
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', (error as Error).message);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
