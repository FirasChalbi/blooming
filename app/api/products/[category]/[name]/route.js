import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/mongodb';
import { Product } from '../../../../../models/Products';

export async function GET(req, { params }) {
  try {
    await connectToDatabase();

    const { category, name } = params;
    const product = await Product.findOne({ category, name });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
