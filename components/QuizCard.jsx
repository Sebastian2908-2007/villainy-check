'use client'
import { useState,useEffect } from 'react';
import AuthModal from '@/components/AuthModal';
import SuccessModal from './SuccessModal';
import { verifyFreeLoggedIn } from '@/utils/getData';
import Link from 'next/link';
const QuizCard = ({ quiz }) => {
  const { quizTitle,_id } = quiz;
  const [isOpen,setIsOpen] = useState(false);
  const [isSuccessOpen,setSuccessIsOpen] = useState(false);
  const [quizzerData,setQuizzerData] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };
console.log(quiz);
const isUserLoggedIn = async () => {
    const user = await verifyFreeLoggedIn();
    console.log(user,"user logged in???");
    if(user === false) {
        setIsOpen(true);
    }
};
useEffect(() => {console.log(quizzerData,"quizzer data in quiz card")},[quizzerData]);
  return (
    <div className="bg-[#849b9f] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4 text-[#fde1e2] font-semibold">{quizTitle}</h2>
      <div className="mb-6">
       {/* <p className='text-[#fde1e2]'>Quiz Description: (You can add a description here)</p>*/}
        {/* Add more quiz details as needed */}
      </div>
      <div className="flex items-center justify-between">

       {!quizzerData ? <button
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
        
    }

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
