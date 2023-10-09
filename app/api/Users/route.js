import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';

// Import your Mongoose models here (e.g., User, Product, Quiz, etc.)
import {User} from '@/db/models';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the User model
    const allUsers = await User.find();

    // Return the User data as needed
    return NextResponse.json({ users: allUsers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}