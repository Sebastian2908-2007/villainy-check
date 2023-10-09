import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Quiz model
import { Quiz } from '@/db/models';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Quiz model
    const allQuizzes = await Quiz.find();

    // Return the Quiz data as needed
    return NextResponse.json({ quizzes: allQuizzes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
