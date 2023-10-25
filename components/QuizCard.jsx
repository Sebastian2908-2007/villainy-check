'use client';
import { useState,useEffect } from 'react';
import AuthModal from '@/components/AuthModal';
import SuccessModal from './SuccessModal';
import { verifyFreeLoggedIn,verifyPaidLoggedIn } from '@/utils/getData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { decode } from 'jsonwebtoken';
const QuizCard = ({ quiz }) => {
  const { quizTitle,_id } = quiz;
  const [isOpen,setIsOpen] = useState(false);
  const [isSuccessOpen,setSuccessIsOpen] = useState(false);
  const [quizzerData,setQuizzerData] = useState(null);
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };
  
//console.log(quiz);
/**In function below we can push with the router a user who is already indeed logged in*/
const isUserLoggedIn = async () => {
    const user = await verifyFreeLoggedIn();
    const paidUser = await verifyPaidLoggedIn();
    console.log(user,"user logged in???");
    if(user || paidUser) {
      if(paidUser){
        const decodedUserData = decode(paidUser.value);
        if(decodedUserData.quizComplete){
          alert('you have already taken the quiz!!! paid admin!!!');
          return;
        };
        router.push(`/quiz/${_id}/user/${decodedUserData._id}`);
      }else{
        const decodedUserData = decode(user.value);
        if(decodedUserData.quizComplete){
          alert('you have already taken the quiz!!! you penny pincher!!!');
          return;
        };
        router.push(`/quiz/${_id}/user/${decodedUserData._id}`);
      }
      
    }else{
      setIsOpen(true);
    }
};


/*const isLoggedInNoClick = async () => {
  const user = await verifyFreeLoggedIn();
  const paidUser = await verifyPaidLoggedIn();
  if(user && user._id === undefined) {
    if(!quizzerData){
     const decodedUserData = decode(user.value);
     setQuizzerData(decodedUserData);
    }else{
      return;
    }
  };
  if(paidUser && paidUser._id === undefined) {
    if(!quizzerData){
     const decodedUserData = decode(paidUser.value);
     setQuizzerData(decodedUserData);
    }else{
      return;
    }
};
};*/
//isLoggedInNoClick();
useEffect(() => {console.log(quizzerData,"quizzer data in quiz card")},[quizzerData]);
  return (
    <div className="bg-[#849b9f] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4 text-[#fde1e2] font-semibold">{quizTitle}</h2>
      <div className="mb-6">
       {/* <p className='text-[#fde1e2]'>Quiz Description: (You can add a description here)</p>*/}
        {/* Add more quiz details as needed */}
      </div>
      <div className="flex items-center justify-between">

       {/*!quizzerData ? <button
          className="
          bg-[#999595] 
          border
          border-[#fde1e2]
          hover:bg-[#fde1e2]
          hover:text-[#999595]
          hover:border-[#999595]
          text-white 
          font-bold 
          py-2 px-4 
          rounded focus:outline-none 
          focus:shadow-outline"
          onClick={() => {
          //setIsOpen(true);
          isUserLoggedIn();
          }}
        >
          Take Quiz
        </button>
        :
        <button
          className="
          bg-[#999595] 
          border
          border-[#fde1e2]
          hover:bg-[#fde1e2]
          hover:text-[#999595]
          hover:border-[#999595]
          text-white 
          font-bold 
          py-2 px-4 
          rounded focus:outline-none 
          focus:shadow-outline"
         
        >
          <Link href={`/quiz/${_id}/user/${quizzerData._id}`}>Take Quiz</Link>
        </button>
        
        */
        <button
          className="
          bg-[#999595] 
          border
          border-[#fde1e2]
          hover:bg-[#fde1e2]
          hover:text-[#999595]
          hover:border-[#999595]
          text-white 
          font-bold 
          py-2 px-4 
          rounded focus:outline-none 
          focus:shadow-outline"
          onClick={() => {
          //setIsOpen(true);
          isUserLoggedIn();
          }}
          
        >
          Take Quiz
        </button>}

      </div>
      <AuthModal
content={'To Take Your Free Quiz Now'} 
title={'Login or Signup'}
isOpen={isOpen}
closeModal={closeModal}
success={setSuccessIsOpen}
setUserData={setQuizzerData}
/>
<SuccessModal 
messagge={'You can now take your Free quiz!'}
isOpen={isSuccessOpen}
closeModal={setSuccessIsOpen}

/>
    </div>
  );
};

export default QuizCard;
