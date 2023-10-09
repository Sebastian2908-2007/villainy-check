import dbConnect from '@/db/config/connection';
import { QuizRecommend } from '@/db/models'; // Import the QuizRecommend model
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB if not already connected

    // Fetch all QuizRecommend data
    const quizRecommends = await QuizRecommend.find();

    return NextResponse.json({ quizRecommends }, { status: 200 }); // Return the data with a 200 status code
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // Handle any errors with a 500 status code
  }
}
