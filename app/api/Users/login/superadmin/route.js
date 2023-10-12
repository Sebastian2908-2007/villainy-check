import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import {User} from '@/db/models';
import { MAX_AGE } from '@/utils/constants';

export async function POST(request) {
    let token;
   
    const { email, password, superAdminPass } = await request.json();
    console.log(process.env.SUPERADMINPASSWORD);
  
    try {
      // Connect to the MongoDB database
      await dbConnect();
  
      // Check for superAdminPass
      if (superAdminPass !== process.env.SUPERADMINPASSWORD) {
        return NextResponse.json({ error: 'Super Admin password is incorrect.' }, { status: 403 }); // Forbidden
      }
  
      // Fetch user data from the database
      const user = await User.findOne({ email });
      console.log(user);
      if (user) {
        token = jwt.sign(
          {
            _id: user._id,
            firstName: user.firstName,
            email: user.email,
            isSuperAdmin: user.isSuperAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: '3h' }
        );
      } else {
        return NextResponse.json({ error: 'Improper credentials. Please try again.' }, { status: 403 }); // Forbidden
      }
  
      const match = await bcrypt.compare(password, user.password);
  console.log(match);
      if (match) {
        const serialized = serialize('superadmincookie', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: MAX_AGE,
          path: '/',
        });
  
        const response = {
          value: token,
        };
  
        return new Response(JSON.stringify(response), {
          status: 200,
          headers: { 'Set-Cookie': serialized },
        });
      } else {
        return NextResponse.json({ error: 'Improper credentials. Please try again.' }, { status: 403 }); // Forbidden
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // Internal Server Error
    }
  }
  