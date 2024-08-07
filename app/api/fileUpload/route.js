import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { Product } from "../../models/Product";
import mongooseConnect from "../../lib/mongooseConnect";

export const POST = async (req, res) => {
  await mongooseConnect();
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
