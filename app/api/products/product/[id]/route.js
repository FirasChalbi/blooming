import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import { Product } from '../../../../../models/Products';
import { ObjectId } from 'mongodb';

export async function GET(req, { params }) {
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

export async function PUT(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const objectId = new ObjectId(id);
    const { name, description, category, images } = await req.json();

    const updatedProduct = await Product.updateOne(
      { _id: objectId },
      { $set: { name, description, category, images } }
    );

    if (updatedProduct.matchedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}