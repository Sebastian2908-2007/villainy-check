import dbConnect from '@/db/config/connection';
import { NextResponse } from 'next/server';
import {Quiz} from '@/db/models';
import stripe from 'stripe'; // Import the Stripe library
import { headers } from 'next/headers'

// Initialize Stripe with your API key
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const headersList = headers();
  let endUrl;
  // this will get the referer url so we can use it f;or redirect upon a successfull transaction
  const url = headersList.get('referer');
  const origin = headersList.get('origin');

       
  //const {origin} = url;
    // initialize empty line items array
    const line_items = [];
 
    try {
      await dbConnect();

      const { productTitle, marketingCopy, quiz, price, type, currentUser} = await request.json();

      if(currentUser) {
      endUrl = 'success';
      }else{
        endUrl = 'signup/admin'
      }

      // Validate the quiz ID
      const ExistingQuiz = await Quiz.findById(quiz);

      if (!ExistingQuiz) {
        return NextResponse.json({ error: 'Quiz not found.' },{status: 404});
      }

      // Create a new Product document
      const newProduct = {
        productTitle:productTitle,
        marketingCopy: marketingCopy,
        quiz: quiz, // Assign the quiz ID
        price: price,
        type: type,
      };

      
      const product = await stripeClient.products.create({
        name: newProduct.productTitle,
        description: newProduct.marketingCopy,
        /* the below images do not work in development!
        images: [`${products[i].image.Location}`]*/
      });

      // generate price id using the product id
      const stripePrice = await stripeClient.prices.create({
        product: product.id,
        unit_amount: Number(newProduct.price) * 100,
        currency: 'usd',
       /* recurring: {
          interval:'month'
        }*/
      });

      // add price id to the line items array
      line_items.push({
        price: stripePrice.id,
        quantity: 1
      });

    // create a checkout session for stripe
    const session = await stripeClient.checkout.sessions.create({
      mode: 'payment' /*`${type}`*/,
      payment_method_types: ['card'],
      line_items: line_items,
      success_url: `${origin}/${endUrl}`,
      cancel_url: `${url}`,
   
    });

      return NextResponse.json({ sessionId: session.id },{status: 201});
    } catch (error) {
      console.error('Server error:', error);
      return NextResponse.json({ error: 'Server error.' },{status: 500});
    }
 
}
