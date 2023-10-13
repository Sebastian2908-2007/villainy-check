import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Product model
import { Product } from '@/db/models';

/**we use this to update the quiz field for products Ive seperated to keep it easier for my brain*/
export async function PUT(request) {
    try {
      await dbConnect(); // Connect to MongoDB
  
      const { productId, quizId } = await request.json();
  
      // Find the product by ID
      const product = await Product.findById(productId);
  
      if (!product) {
        return NextResponse.json({ error: 'Product not found.' }, { status: 404 });
      }
  
      // Update the quiz field with the provided quizId
      product.quiz = quizId;
  
      // Save the updated product
      const updatedProduct = await product.save();
  
      return NextResponse.json({ product: updatedProduct }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }
  