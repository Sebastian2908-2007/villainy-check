import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import {User} from '@/db/models';
import { MAX_AGE } from '@/utils/constants';


export async function POST(request) {
    let token;
    const { email, password } = await request.json();
  
    try {
      // Connect to the MongoDB database
      await dbConnect();
  
      // Fetch admin data from the database
      const user = await User.findOne({ email });
      if (user) {
        token = jwt.sign(
          {
            _id: user._id,
            firstName: user.firstName,
            email: user.email,
            isPaid: user.isPaid,
            quizComplete: user.quizComplete,

          },
          process.env.JWT_SECRET,
          { expiresIn: '3h' }
        );
      } else {
        return NextResponse.json({ error: 'Improper credentials. Please try again.' }, { status: 403 }); // Forbidden
      }
  
      const match = await bcrypt.compare(password, user.password);
  
      if (match) {
        //return NextResponse.json({ admin: user, token: token }, { status: 200 },); // 200 OK
        const seralized = serialize("logincookie", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          //  maxAge: MAX_AGE,
            path: "/",
          });
        
          const response = {
            value: token ,
          };
        
          return new Response(JSON.stringify(response), {
            status: 200,
            headers: { "Set-Cookie": seralized },
          });
        
      } else {
        return NextResponse.json({ error: 'Improper credentials. Please try again.' }, { status: 403 }); // Forbidden
      }
    } catch (error) {
        console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }