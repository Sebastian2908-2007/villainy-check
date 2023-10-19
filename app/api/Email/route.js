import Email from '@/components/emails/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const {quizData} = await request.json();
   // console.log(quizData);
    const {recommendation,firstName,lastName,recipiant} = quizData;
    console.log(recommendation,firstName,lastName,recipiant,'REC POST');
  try {
    const data = await resend.emails.send({
      from: 'sebastian@topdev.tech',
      to:`${recipiant}`,
      subject: `${firstName} ${lastName}'s test results`,
      react: Email({ recommendation,firstName,lastName }),
    });
console.log(data);
    return NextResponse.json({success: 'email sent!'});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
