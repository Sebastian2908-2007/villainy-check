import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Quiz model
import { Quiz,Question,Answer,QuizRecommend } from '@/db/models';



export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Quiz model and populate questions with their nested answers
    const allQuizzes = await Quiz.find().populate({
      path: 'questions',
      populate: {
        path: 'answers',
      },
    }).populate('outcomeRecommendations'); // Populate the outcomeRecommendations field

    // Return the Quiz data with populated questions, answers, and outcomeRecommendations
    return NextResponse.json({ quizzes: allQuizzes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}


export async function POST(request,response) {
  try {
    await dbConnect(); // Connect to MongoDB

  const { quizTitle, /*idealOutcome*/ } = await request.json();

    // Create a new Quiz document
    const newQuiz = new Quiz({
      quizTitle,
      idealOutcome: 15, 
    });
    

    // Save the new Quiz document to the database
    const savedQuiz = await newQuiz.save();

    return NextResponse.json({ quiz: savedQuiz }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}



export async function DELETE(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { quizId } = await request.json(); // Assuming the quiz ID is in the request body

    // Find the quiz by ID
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found.' }, { status: 404 });
    }

    // Delete all associated questions and their answers
    for (const questionId of quiz.questions) {
      const question = await Question.findById(questionId);

      if (question) {
        // Delete all associated answers
        for (const answerId of question.answers) {
          await Answer.findByIdAndDelete(answerId);
        }

        // Delete the question itself, which will delete its associated answers
        await Question.findByIdAndDelete(questionId);
      }
    }

    // Delete outcomeRecommendations
    for (const recommendationId of quiz.outcomeRecommendations) {
      await QuizRecommend.findByIdAndDelete(recommendationId);
    }

    // Delete the quiz itself
    await Quiz.findByIdAndDelete(quizId);

    return NextResponse.json({ message: 'Quiz, questions, answers, and recommendations deleted.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

export async function PUT(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { quizId, updatedData } = await request.json();
    

    // Find the quiz by ID and update it with the provided data
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      quizId,
      { $set: updatedData }, // This will only update the fields specified in updatedData
      { new: true }
    );

    if (!updatedQuiz) {
      return NextResponse.json({ error: 'Quiz not found.' }, { status: 404 });
    }

    return NextResponse.json({ quiz: updatedQuiz }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}



