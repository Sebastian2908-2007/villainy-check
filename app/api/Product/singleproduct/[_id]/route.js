import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import { Product } from '@/db/models';

export async function GET(request, { params }) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { _id } = params; // Get the product ID from the query parameters

    // Fetch the product document by _id
    const product = await Product.findById(_id);

    if (!product) {
      return NextResponse.json({ error: 'Product not found.' }, { status: 404 });
    }

    // Return the fetched product data
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}