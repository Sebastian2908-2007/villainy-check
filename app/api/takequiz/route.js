import {cookies} from 'next/headers';
import { verify } from "jsonwebtoken";
import { PAID_ADMIN_COOKIE_NAME,COOKIE_NAME } from "@/utils/constants";
import { NextResponse } from "next/server";
import decode from 'jwt-decode';
import {User} from '@/db/models'
import dbConnect from '@/db/config/connection';

export async function GET() {
  const cookieStore = cookies().getAll();
    try {
    cookieStore.forEach((cookie) => {
cookies().delete(cookie.name);
    });
    
    return NextResponse.json({ message: 'Quiz, questions, answers, and recommendations deleted.' }, { status: 200 });
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
}