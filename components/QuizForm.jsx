"use client"

import React, { useState } from 'react';

const QuizForm = ({createdQuizId,setCreatedQuizId,updateQuizData}) => {
 
  const [quizData, setQuizData] = useState({
    quizTitle: '',
    //idealOutcome: '',
  });
  /**Added Jan 24 2023 */
  const [finishSubmitted,setFinishSubmitted] = useState(null);

  const handleQuizChange = (e) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    setFinishSubmitted(true);
    try {
        const response = await fetch('/api/Quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(quizData),
        });
  
        if (!response.ok) {
          // Handle the error here if needed
          console.error('Failed to create a quiz');
          return;
        }
  
        const data = await response.json();
        const quizId = data.quiz._id;
        await updateQuizData(quizId);
  
        // Store the quiz _id in state
        setCreatedQuizId(quizId);
        setQuizData({
            quizTitle: '',
            //idealOutcome: '',
       });
       setFinishSubmitted(false);
      } catch (error) {
        // Handle any other errors here
        console.error('An error occurred:', error);
        setFinishSubmitted(false);
      }
  };
 
  return (
    <>
    <form onSubmit={handleQuizSubmit}>
      <div className="mb-4">
        <label htmlFor="quizTitle" className="block font-medium ">
          Quiz Title:
        </label>
        <input
          type="text"
          id="quizTitle"
          name="quizTitle"
          value={quizData.quizTitle}
          onChange={handleQuizChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      {finishSubmitted ? 
      
                 <button  disabled={true} type="submit" 
    className="
    disabled:bg-gray-400
    disabled:text-gray-700
    disabled:border-gray-400
    border
    bg-[#849b9f] 
    border-[#fde1e2]
    hover:bg-[#fde1e2] 
    hover:text-[#999595]
    hover:border-[#999595] 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded 
    focus:outline-none 
    focus:shadow-outline"
    >
      
      
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...submitting
            </button>
            
            :
           <button  disabled={createdQuizId && true} type="submit" 
    className="
    disabled:bg-gray-400
    disabled:text-gray-700
    disabled:border-gray-400
    border
    bg-[#849b9f] 
    border-[#fde1e2]
    hover:bg-[#fde1e2] 
    hover:text-[#999595]
    hover:border-[#999595] 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded 
    focus:outline-none 
    focus:shadow-outline">
        Create Quiz
      </button>
 } 
    </form>

    </>
  );
};

export default QuizForm;

/*
 {finishSubmitted ? 
                 <button  disabled={true} type="submit" 
    className="
    disabled:bg-gray-400
    disabled:text-gray-700
    disabled:border-gray-400
    border
    bg-[#849b9f] 
    border-[#fde1e2]
    hover:bg-[#fde1e2] 
    hover:text-[#999595]
    hover:border-[#999595] 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded 
    focus:outline-none 
    focus:shadow-outline">
        Create Quiz
      </button>
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...Finishing up
            </button>
            
            :
           <button  disabled={createdQuizId && true} type="submit" 
    className="
    disabled:bg-gray-400
    disabled:text-gray-700
    disabled:border-gray-400
    border
    bg-[#849b9f] 
    border-[#fde1e2]
    hover:bg-[#fde1e2] 
    hover:text-[#999595]
    hover:border-[#999595] 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded 
    focus:outline-none 
    focus:shadow-outline">
        Create Quiz
      </button>
 }   

*/