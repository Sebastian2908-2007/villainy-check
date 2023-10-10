import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Quiz model
import { Quiz} from '@/db/models';

export async function GET(request,{params}) {
  try {
    await dbConnect(); // Connect to MongoDB
console.log(params);
    const { _id } = params; // Get the quizId from the query parameters
console.log(_id,"in route");
    // Fetch the quiz document by _id and populate its associated questions and recommendations
    const quiz = await Quiz.findById(_id)
      .populate({
        path: 'questions',
        populate: {
          path: 'answers',
        },
      })
      .populate('outcomeRecommendations');
      console.log(quiz);

    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found.' }, { status: 404 });
    }

    // Return the fetched quiz data with populated questions, answers, and recommendations
    return NextResponse.json({ quiz: quiz }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
