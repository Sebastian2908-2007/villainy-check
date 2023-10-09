import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';

// Import the Question model
import { Question } from '@/db/models';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Question model
    const allQuestions = await Question.find();

    // Return the Question data as needed
    return NextResponse.json({ questions: allQuestions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
