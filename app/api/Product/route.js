import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Product model
import { Product } from '@/db/models';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Product model
    const allProducts = await Product.find();

    // Return the Product data as needed
    return NextResponse.json({ products: allProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
