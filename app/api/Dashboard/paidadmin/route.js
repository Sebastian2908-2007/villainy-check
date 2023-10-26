import {cookies} from 'next/headers';
import { verify } from "jsonwebtoken";
import { PAID_ADMIN_COOKIE_NAME,COOKIE_NAME } from "@/utils/constants";
import { NextResponse } from "next/server";
import decode from 'jwt-decode';
import {User} from '@/db/models'
import dbConnect from '@/db/config/connection';
import bcrypt from 'bcryptjs';
/**for sending magic quiz links*/
import { Resend } from 'resend'
import MagickLinkEmail from '@/components/emails/MagickLinkEmail';

/**this is an auth route used in the paid admin layout component it helps with ui security*/
export async function GET() {
    let loginToken;
    let token;
    let isPaid;
    const cookieStore = cookies();
    token = cookieStore.get(PAID_ADMIN_COOKIE_NAME);
     // if this route is hit and previous cookie is not available then we know user is logging in
     // so we try for that cookie so we can check isPaid data on token
     loginToken = cookieStore.get(COOKIE_NAME);
if(token === undefined && loginToken) {
    const userTknData = decode(loginToken.value);
    isPaid = userTknData.isPaid;
}

    if (isPaid === false) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }
  
    if(token) {
    const { value } = token;
  
    // Always check this
    const secret = process.env.JWT_SECRET || "";
  
    try {
    
    verify(value, secret,function(err,decoded){
      if(err) {
        console.log(err);
       
      }
    
    });
      const response = {
        value: value,
      };
  
      return new Response(JSON.stringify(response), {
        status: 200,
       
      });
    } catch (e) {
       
      
      return NextResponse.json(
        {
          message: "Something went wrong",
        },
        {
          status: 400,
        }
      );
    }
    }else{
      if(loginToken) {
        const { value } = loginToken;
  
    // Always check this
    const secret = process.env.JWT_SECRET || "";
  
    try {
      verify(value, secret);
      
      const response = {
        value: value,
      };
  
      return new Response(JSON.stringify(response), {
        status: 200,
       
      });
    } catch (e) {
       
      return NextResponse.json(
        {
          message: "Something went wrong",
        },
        {
          status: 400,
        }
      );
    }
  }else{
    return NextResponse.json(
      {
        message: "No user logged in",
      },
      {
        status: 401,
      }
    );
  }
    }
  }

  /**this route is for paid admins to add user who will take their quiz */
  

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    // Connect to the MongoDB database
    await dbConnect();

    const {
      email,
      password,
      firstName,
      lastName,
      userId, // ID of the user creating the new user
      adminEmail,//users admin email
      assignedQuiz// send assignedQuiz
    } = await request.json();
const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the user creating the new user exists
    const creatorUser = await User.findById(userId);

    if (!creatorUser) {
      return NextResponse.json({ error: 'User creating the new user not found.' }, { status: 400 });
    }

    // Create a new User document with isSubject set to true
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      isSubject: true,
      assignedQuiz,
      adminEmail
    });

    // Save the new User document to the database
    const savedUser = await newUser.save();

    // Push the ID of the newly created user into the subjects array of the creator user
    creatorUser.subjects.push(savedUser._id);

    await creatorUser.save();
    // we create our added subject user a quiz link for later test navigation
const newQuizLink = `/quiz/${assignedQuiz}/user/${savedUser._id}`;

// First, we find the user you want to update.
const userToUpdate = await User.findById(savedUser._id);

// Then, set the new quizLink property.
userToUpdate.quizLink = newQuizLink;

// Save the updated user to the database.
await userToUpdate.save();

try {
  const data = await resend.emails.send({
    from: 'sebastian@topdev.tech',
    to:`${userToUpdate.email}`,
    subject: `${userToUpdate.firstName} ${userToUpdate.lastName}'s Magic Quiz Link`,
    react: MagickLinkEmail({ newQuizLink }),
  });

} catch (error) {
  console.log('email error');
}


    return NextResponse.json({ message: 'User created and updated successfully & quiz link email sent!.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
