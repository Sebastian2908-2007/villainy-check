'use client'
import { useState,useEffect } from 'react';
import clientDatabase from '@/utils/dexieDb';
// utils/stripe.js
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import { decode } from 'jsonwebtoken';
import Cookies from 'js-cookie';




const ProductCard = ({ product }) => {
const [stripeData,setStripeData] = useState(null);
/*const getStripe = () => {
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  };*/
//console.log(product);
    let newProduct = {
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
       const userCookie = Cookies.get('userinfocookie') ;
       console.log(userCookie,"user cookie");
       const userInfo = decode(userCookie);
       if(userInfo) {
        newProduct.currentUser = true;
      //  newProduct.currentUserId = userInfo._id
        console.log(userInfo,'True current user');
        console.log(newProduct,'new product data');
       }else{
        newProduct.currentUser = false;
        //newProduct.currentUserId = false;
        console.log('false current user');
       }
       
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
    <div className="bg-[#999595] shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl text-white  font-semibold mb-2">{product.productTitle}</h2>
        <p className="text-[#fde1e2]  mb-2">Quiz Title: {product.quiz.quizTitle}</p>
        <p className="text-[#fde1e2]  mb-4">{product.marketingCopy}</p>
        <div className="flex justify-between">
          <span className="text-white font-semibold">Price: ${product.price}</span>
          <button
           onClick={handleBuyNowClick}
            className="px-4 
            py-2 
            rounded-full  
            transition duration-300 
            ease-in-out
            bg-[#849b9f]
            hover:bg-[#fde1e2]
            hover:text-white
            text-white
            "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


