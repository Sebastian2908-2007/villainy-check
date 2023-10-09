import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import {Answer} from '@/db/models';
// Import the Question model
import { Question,Quiz } from '@/db/models';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the Question model and populate answers
    const allQuestions = await Question.find().populate('answers');

    // Return the Question data with populated answers
    return NextResponse.json({ questions: allQuestions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}


/**this creates question and update quiz */

export async function POST(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { quizId, ques1, ques2 } = await request.json();

    // Create a new Question document and associate it with the provided quizId
    const newQuestion = new Question({
      ques1: ques1,
      ques2: ques2,
    });

    // Save the new Question document to the database
    const savedQuestion = await newQuestion.save();

    // Find the associated quiz by ID and push the new question's ID to its questions array
    const quiz = await Quiz.findByIdAndUpdate(
      quizId,
      { $push: { questions: savedQuestion._id } },
      { new: true }
    );

    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found.' }, { status: 404 });
    }

    return NextResponse.json({ question: savedQuestion }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}



export async function DELETE(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { questionId } = await request.json(); // Assuming the question ID is in the request body

    // Find the question by ID
    const question = await Question.findById(questionId);

    if (!question) {
      return NextResponse.json({ error: 'Question not found.' }, { status: 404 });
    }

    // Delete all associated answers
    for (const answerId of question.answers) {
      await Answer.findByIdAndDelete(answerId);
    }

    // Delete the question itself
    await Question.findByIdAndDelete(questionId); // Use findByIdAndDelete for the question

    return NextResponse.json({ message: 'Question and associated answers deleted.' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}


export async function PUT(request, response) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { questionId, ques1, ques2 } = await request.json(); // Assuming the question ID, ques1, and ques2 are in the request body

    // Find the question by ID
    const question = await Question.findById(questionId);

    if (!question) {
      return NextResponse.json({ error: 'Question not found.' }, { status: 404 });
    }

    // Update the question fields only if they are provided in the request
    if (ques1) {
      question.ques1 = ques1;
    }
    
    if (ques2) {
      question.ques2 = ques2;
    }

    // Save the updated question
    const updatedQuestion = await question.save();

    return NextResponse.json({ question: updatedQuestion }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}






/**Delete question and answers _id in params Keep for later just in case*/
/*export async function DELETE(request, { params }) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { id } = params; // Assuming the question ID is in the params

    // Find the question by ID
    const question = await Question.findById(id);

    if (!question) {
      return NextResponse.json({ error: 'Question not found.' }, { status: 404 });
    }

    // Delete all associated answers
    for (const answerId of question.answers) {
      await Answer.findByIdAndDelete(answerId);
    }

    // Delete the question itself
    await question.remove();

    return NextResponse.json({ message: 'Question and associated answers deleted.' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}*/
