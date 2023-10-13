import dbConnect from '@/db/config/connection';
import { QuizRecommend,Quiz } from '@/db/models'; // Import the QuizRecommend model
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

export async function POST(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { quizId, typeOfRecommendation, resultsMeaning, tipsSummary } = await request.json();

    // Create a new QuizRecommendation document
    const newRecommendation = new QuizRecommend({
      typeOfRecommendation: typeOfRecommendation,
      resultsMeaning: resultsMeaning,
      tipsSummary: tipsSummary,
    });

    // Save the new QuizRecommendation document to the database
    const savedRecommendation = await newRecommendation.save();

    // Find the associated quiz by ID and push the new recommendation's ID to its outcomeRecommendations array
    const quiz = await Quiz.findByIdAndUpdate(
      quizId,
      { $push: { outcomeRecommendations: savedRecommendation._id } },
      { new: true }
    );

    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found.' }, { status: 404 });
    }

    return NextResponse.json({ recommendation: savedRecommendation }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

export async function PUT(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { recommendationId, typeOfRecommendation, typeAScore, typeBScore, balancedScore, resultsMeaning, tipsSummary } = await request.json();

    // Find the recommendation by ID
    const recommendation = await QuizRecommend.findById(recommendationId);

    if (!recommendation) {
      return NextResponse.json({ error: 'Recommendation not found.' }, { status: 404 });
    }

    // Update the recommendation with the provided fields
    if (typeAScore !== undefined) {
      recommendation.typeAScore = typeAScore;
    }
    if (typeBScore !== undefined) {
      recommendation.typeBScore = typeBScore;
    }
    if (balancedScore !== undefined) {
      recommendation.balancedScore = balancedScore;
    }
    if (resultsMeaning !== undefined) {
      recommendation.resultsMeaning = resultsMeaning;
    }
    if (tipsSummary !== undefined) {
      recommendation.tipsSummary = tipsSummary;
    }
    if ( typeOfRecommendation !== undefined) {
      recommendation. typeOfRecommendation =  typeOfRecommendation;
    }

    // Save the updated recommendation document to the database
    const updatedRecommendation = await recommendation.save();

    return NextResponse.json({ recommendation: updatedRecommendation }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

