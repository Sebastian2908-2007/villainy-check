import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Product model
import { Product,Quiz } from '@/db/models';


export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Product model and populate the 'quiz' field
    const allProducts = await Product.find().populate({
      path: 'quiz',
      populate: [
        {
          path: 'questions',
          populate: {
            path: 'answers',
          },
        },
        {
          path: 'outcomeRecommendations',
        },
      ],
    });

    // Return the Product data with populated 'quiz' field
    return NextResponse.json({ products: allProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}




export async function POST(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { productTitle, marketingCopy, quizId, price, type } = await request.json();

    // Validate the quiz ID
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found.' }, { status: 404 });
    }

    // Create a new Product document
    const newProduct = new Product({
      productTitle,
      marketingCopy,
      quiz: quizId, // Assign the quiz ID
      price,
      type,
    });

    // Save the new Product document to the database
    const savedProduct = await newProduct.save();

    return NextResponse.json({ product: savedProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { productId, updatedData } = await request.json();

    // Find the product by ID and update it with the provided data
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: updatedData,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ error: 'Product not found.' }, { status: 404 });
    }

    return NextResponse.json({ product: updatedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}



export async function DELETE(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { productId } = await request.json(); // Assuming the product ID is in the request body
console.log(productId,"in route");
    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return NextResponse.json({ error: 'Product not found.' }, { status: 404 });
    }

    // Delete the product
    await Product.findByIdAndDelete(productId);

    return NextResponse.json({ message: 'Product deleted.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
