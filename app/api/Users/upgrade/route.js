import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

// Import your Mongoose models here (e.g., User, Product, Quiz, etc.)
import {User} from '@/db/models';
import { MAX_AGE } from '@/utils/constants';


export async function PUT(request) {
    console.log('updgrade running');
    let token;
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
  
      token = jwt.sign(
        {
          _id: updatedUser._id,
          firstName: updatedUser.firstName,
          email: updatedUser.email,
          isPaid: updatedUser.isPaid,
          quizComplete: updatedUser.quizComplete
        },
        process.env.JWT_SECRET,
        { expiresIn: '11h' }

      );

      const serialized = serialize("paidadmincookie", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
      });

      const response = {
        value: token,
      };
  console.log(serialized,"Serialized");
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": serialized },
      });
 
  
      //return NextResponse.json({ user: updatedUser,token: token }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }