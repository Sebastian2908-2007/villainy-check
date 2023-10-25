import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
// Import your Mongoose models here (e.g., User, Product, Quiz, etc.)
import {User} from '@/db/models';
import { MAX_AGE } from '@/utils/constants';

export async function GET(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    // Fetch all documents from the User model
    const allUsers = await User.find();

    // Return the User data as needed
    return NextResponse.json({ users: allUsers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}



/**this route creates a free user FREE SIGNUP */
export async function POST(request) {
  let token;
  try {
    // Connect to the MongoDB database
    await dbConnect();

    const {
      email,
      password,
      firstName,
      lastName,
    } = await request.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 400 }); // Bad Request
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User document
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    // Save the new User document to the database
    const savedUser = await newUser.save();
    token = jwt.sign(
      {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        email: savedUser.email,
        isPaid: savedUser.isPaid,
        quizComplete: savedUser.quizComplete
      },
      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    );

    
    const seralized = serialize("logincookie", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });
  
    const response = {
      value: token,
    };
  
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Set-Cookie": seralized },
    });
  
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
  }
}

export async function PUT(request) {
  try {
    // Connect to the MongoDB database
    await dbConnect();

    // Extract the user ID from the request, assuming it's included in the request body
    const { userId, updatedData } = await request.json();
console.log(updatedData,'BE updated data');
console.log(userId);
    // Find the user by ID and update it with the provided data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedData }, // This will only update the fields specified in updatedData
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect(); // Connect to MongoDB

    const { userId } = await request.json(); // Assuming the user ID is in the request body

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    // Delete the user
    await User.findByIdAndDelete(userId);

    return NextResponse.json({ message: 'User deleted.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
