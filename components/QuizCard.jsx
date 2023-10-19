'use client'
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import SuccessModal from './SuccessModal';
import { verifyFreeLoggedIn } from '@/utils/getData';
const QuizCard = ({ quiz }) => {
  const { quizTitle } = quiz;
  const [isOpen,setIsOpen] = useState(false);
  const [isSuccessOpen,setSuccessIsOpen] = useState(false);

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
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4 font-semibold">{quizTitle}</h2>
      <div className="mb-6">
        <p>Quiz Description: (You can add a description here)</p>
        {/* Add more quiz details as needed */}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
          //setIsOpen(true);
          isUserLoggedIn();
          }}
        >
          Take Quiz
        </button>
      </div>
      <AuthModal
content={'To Take Your Free Quiz Now'} 
title={'Login or Signup'}
isOpen={isOpen}
closeModal={closeModal}
success={setSuccessIsOpen}
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
