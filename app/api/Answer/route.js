import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Answer model
import { Answer } from '@/db/models';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Answer model
    const allAnswers = await Answer.find();

    // Return the Answer data as needed
    return NextResponse.json({ answers: allAnswers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
