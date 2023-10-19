import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import {User} from '@/db/models';

export async function GET(request, { params }) {
  try {
    // Connect to MongoDB if not already connected
    await dbConnect();

    const { _id } = params; // Get the user ID from the route parameters
console.log(_id,"IN ROUTE");
    // Fetch the user document by _id and populate any referenced data fields (e.g., productType, subjects, etc.)
    const user = await User.findById(_id)
      .populate('productType') // Assuming productType is a reference to the 'Product' model
      .populate({
        path: 'subjects',
        populate: [
          { path: 'quizRecommendations' }, // Assuming quizRecommendations is a reference to the 'QuizRecommendation' model
          { path: 'assignedQuiz' }, // Assuming assignedQuiz is a reference to the 'Quiz' model
        ],
      }) // Assuming subjects is a reference to other 'User' documents
      .populate('usersPurchases'); // Assuming usersPurchases is a reference to 'Product' model or another related model

    if (!user) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    // Return the fetched user data with populated fields
    return NextResponse.json({ user: user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}