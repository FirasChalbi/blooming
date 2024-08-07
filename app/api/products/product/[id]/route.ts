import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import { Product } from '../../../../../models/Products';
import { ObjectId } from 'mongodb';
import path from "path";
import { writeFile } from "fs/promises";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();

    const { id } = params;  
    const objectId = new ObjectId(id);

    const product = await Product.findOne({ _id: objectId });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const { id } = params;

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

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        images: imageArray,
        pdfs: pdfFilenames,
      },
      { new: true }
    );
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', (error as Error).message);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}