import ResultsEmail from '@/components/emails/ResultsEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const {quizData} = await request.json();
   
    const {recommendation,firstName,lastName,recipiant} = quizData;
  try {
    const data = await resend.emails.send({
      from: 'contact@olddeel.org',
      //from: 'sebastian@topdev.tech',
      to:`${recipiant}`,
      subject: `${firstName} ${lastName}'s test results`,
      react: ResultsEmail({ recommendation,firstName,lastName }),
    });

    return NextResponse.json({success: 'email sent!'});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
