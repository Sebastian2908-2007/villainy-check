'use client'
import { useState,useEffect } from 'react';
import clientDatabase from '@/utils/dexieDb';
// utils/stripe.js
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);




const ProductCard = ({ product }) => {
const [stripeData,setStripeData] = useState(null);
/*const getStripe = () => {
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  };*/
//console.log(product);
    const newProduct = {
        _id: product._id ,
        productTitle: product.productTitle ,
        marketingCopy: product.marketingCopy ,
        quiz: product.quiz._id,
        price: product.price ,
        type: product.type ,
      };
//console.log(newProduct);
      async function addProductToClientDatabase() {
        try {
          await clientDatabase.product.add(newProduct);
          console.log('Product added to the database.');
        } catch (error) {
          console.error('Error adding product:', error);
        }
      }
      useEffect(() => {
        if (stripeData) {
            console.log(stripeData)
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: stripeData.sessionId });
            });
        }
      }, [stripeData]);


      async function handleBuyNowClick() {
        addProductToClientDatabase();
        try {  
          // Create a PaymentIntent or Checkout Session on the server
          const response = await fetch('/api/Product/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( newProduct ),
          });
      
          const session = await response.json();
          console.log(session.sessionId);
         setStripeData(session);
        
        } catch (error) {
          console.error('Error processing purchase:', error);
        }
      }
      

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.productTitle}</h2>
        <p className="text-gray-500 mb-2">Quiz Title: {product.quiz.quizTitle}</p>
        <p className="text-gray-500 mb-4">{product.marketingCopy}</p>
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">Price: ${product.price}</span>
          <button
           onClick={handleBuyNowClick}
            className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


