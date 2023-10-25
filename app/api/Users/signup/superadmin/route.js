import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import {User} from '@/db/models';
import { MAX_AGE } from '@/utils/constants';

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
        superAdminPass
      } = await request.json();
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return NextResponse.json({ error: 'User already exists.' }, { status: 400 }); // Bad Request
      }
  
      // Check if superAdminPass matches the environment variable
      const isSuperAdmin = superAdminPass === process.env.SUPERADMINPASSWORD;
  if(isSuperAdmin){
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new User document
      const newUser = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        isSuperAdmin: true, // Set isSuperAdmin based on the comparison result
         // If it's a super admin, isPaid should be false
      });
  
      // Save the new User document to the database
      const savedUser = await newUser.save();
  
      token = jwt.sign(
        {
          _id: savedUser._id,
          firstName: savedUser.firstName,
          email: savedUser.email,
          isPaid: savedUser.isPaid,
          isSuperAdmin: savedUser.isSuperAdmin, // Add isSuperAdmin to the token
          quizComplete: savedUser.quizComplete
        },
        process.env.JWT_SECRET,
        { expiresIn: '3h' }
      );
  
      const serialized = serialize("superadmincookie", token, {
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
        headers: { "Set-Cookie": serialized },
      });
    }else{
      return NextResponse.json({ error: 'Improper credentials. Please try again.' }, { status: 403 }); 
    }
  
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }
  