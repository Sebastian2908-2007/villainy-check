import {cookies} from 'next/headers';
import { verify } from "jsonwebtoken";
import { PAID_ADMIN_COOKIE_NAME,COOKIE_NAME } from "@/utils/constants";
import { NextResponse } from "next/server";
import decode from 'jwt-decode';

export async function GET() {
    let loginToken;
    let token;
    let isPaid;
    const cookieStore = cookies();
  console.log(PAID_ADMIN_COOKIE_NAME);
     token = cookieStore.get(PAID_ADMIN_COOKIE_NAME);

     // if this route is hit and previous cookie is not available then we know user is logging in
     // so we try for that cookie so we can check isPaid data on token
if(token === undefined) {
    console.log('undef runs');
    loginToken = cookieStore.get(COOKIE_NAME);
    const userTknData = decode(loginToken.value);
    isPaid = userTknData.isPaid;
    console.log(isPaid,"isPaid");
}


  console.log(token,"B E");
    if (!token && !isPaid) {
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

    }
  }