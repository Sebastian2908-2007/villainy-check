import {cookies} from 'next/headers';
import { verify } from "jsonwebtoken";
import { ADMIN_COOKIE_NAME } from "@/utils/constants";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();
  console.log(ADMIN_COOKIE_NAME);
    const token = cookieStore.get(ADMIN_COOKIE_NAME);
  console.log(token,"B E");
    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }
  
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
  }