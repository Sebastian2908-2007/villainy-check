'use client';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import SuccessModal from './SuccessModal';
import UpgradeModal from './UpgradeModal';
import { verifyFreeLoggedIn,verifyPaidLoggedIn } from '@/utils/getData';
import { useRouter } from 'next/navigation';
import { decode } from 'jsonwebtoken';
const QuizCard = ({ quiz }) => {
  const { quizTitle,_id } = quiz;
  const [isOpen,setIsOpen] = useState(false);
  const [isOpenUpgradeModal,setIsOpenUpgradeModal] = useState(false);
  const [isSuccessOpen,setSuccessIsOpen] = useState(false);
  const [quizzerData,setQuizzerData] = useState(null);
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };
  

/**In function below we can push with the router a user who is already indeed logged in*/
const isUserLoggedIn = async () => {
    const user = await verifyFreeLoggedIn();
    const paidUser = await verifyPaidLoggedIn();

    if(user || paidUser) {
      if(paidUser){
        const decodedUserData = decode(paidUser.value);
        /**At this point for times sake if someone has or is paying we will just allow them quizzes
         * the below if is here for the day we stop doing that
         */
        router.push(`/quiz/${_id}/user/${decodedUserData._id}`);
      }else{
        const decodedUserData = decode(user.value);
        if(decodedUserData.quizComplete){
          //alert('you have already taken the quiz!!! you penny pincher!!!');
          setIsOpenUpgradeModal(true);
          return;
        };
        router.push(`/quiz/${_id}/user/${decodedUserData._id}`);
      }
      
    }else{
      setIsOpen(true);
    }
};




  return (
    <div className="bg-[#849b9f] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-4 text-[#fde1e2] font-semibold">{quizTitle}</h2>
      <div className="mb-6">
      </div>
      <div className="flex items-center justify-between">
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
        </button>

      </div>
      <UpgradeModal
      isOpen={isOpenUpgradeModal} 
      setIsOpen={setIsOpenUpgradeModal}
      />
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
