import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
// Import the Answer model
import { Answer,Question } from '@/db/models';

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

/*this creates answer and updates question*/


export async function POST(request, response) {
    try {
      await dbConnect(); // Connect to MongoDB
  
      const { questionId, answerTxt, answerType, correct } = await request.json();
  
      // Create a new Answer document
      const newAnswer = new Answer({
        answerTxt: answerTxt,
        answerType: answerType,
        correct: correct,
      });
  
      // Save the new Answer document to the database
      const savedAnswer = await newAnswer.save();
  
      // Find the associated question by ID and push the new answer's ID to its answers array
      const question = await Question.findByIdAndUpdate(
        questionId,
        { $push: { answers: savedAnswer._id } },
        { new: true }
      );
  
      if (!question) {
        return NextResponse.json({ error: 'Question not found.' }, { status: 404 });
      }
  
      // If the answer is correct, update the correctAnswer field on the question
      if (correct === 'true') {
        question.correctAnswer = savedAnswer._id;
        await question.save();
      }
  
      return NextResponse.json({ answer: savedAnswer }, { status: 201 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }
  
  /**Update for answer */
  export async function PUT(request, response) {
    try {
      await dbConnect(); // Connect to MongoDB
  
      const { answerId, answerTxt, answerType, correct } = await request.json(); // Assuming the answer ID and fields are in the request body
  
      // Find the answer by ID
      const answer = await Answer.findById(answerId);
  
      if (!answer) {
        return NextResponse.json({ error: 'Answer not found.' }, { status: 404 });
      }
  
      // Update the answer fields only if they are provided in the request
      if (answerTxt) {
        answer.answerTxt = answerTxt;
      }
  
      if (answerType) {
        answer.answerType = answerType;
      }
  
      if (correct) {
        answer.correct = correct;
      }
  
      // Save the updated answer
      const updatedAnswer = await answer.save();
  
      return NextResponse.json({ answer: updatedAnswer }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }
  













  

  /**export async function PUT(request, response) {
    try {
      await dbConnect(); // Connect to MongoDB
  
      const { answerId, answerTxt, answerType, correct } = await request.json();
  
      // Find the existing answer by its ID
      const existingAnswer = await Answer.findById(answerId);
  
      if (!existingAnswer) {
        return NextResponse.json({ error: 'Answer not found.' }, { status: 404 });
      }
  
      // Update only the fields provided in the request
      if (answerTxt !== undefined) {
        existingAnswer.answerTxt = answerTxt;
      }
      if (answerType !== undefined) {
        existingAnswer.answerType = answerType;
      }
      if (correct !== undefined) {
        existingAnswer.correct = correct;
      }
  
      // Save the updated answer
      const updatedAnswer = await existingAnswer.save();
  
      return NextResponse.json({ answer: updatedAnswer }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }**/
  
  

  export async function DELETE(request, response) {
    try {
        await dbConnect(); // Connect to MongoDB
      const { answerId } = await request.json();
  
      const deletedAnswer = await Answer.findByIdAndDelete(answerId);
  
      if (!deletedAnswer) {
        return NextResponse.json({ message: 'Answer not found.' }, { status: 404 });
      }
  
      return NextResponse.json({ answer: deletedAnswer }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }
  