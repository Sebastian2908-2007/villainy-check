"use client"

import React, { useState,useEffect } from 'react';

const QuizForm = ({createdQuizId,setCreatedQuizId,updateQuizData}) => {
  const [quizData, setQuizData] = useState({
    quizTitle: '',
    idealOutcome: '',
  });

  const handleQuizChange = (e) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();

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
        console.log('Created quiz with ID:', quizId);
        await updateQuizData(quizId);
  
        // Store the quiz _id in state
        setCreatedQuizId(quizId);
        setQuizData({
            quizTitle: '',
            idealOutcome: '',
       })
      } catch (error) {
        // Handle any other errors here
        console.error('An error occurred:', error);
      }
  };

useEffect(()=> {console.log(quizData)},[quizData]);
useEffect(()=> {console.log(createdQuizId)},[createdQuizId]);
 
  return (
    <>
    <form onSubmit={handleQuizSubmit}>
      <div className="mb-4">
        <label htmlFor="quizTitle" className="block font-medium">
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
      <div className="mb-4">
        <label htmlFor="idealOutcome" className="block font-medium">
          Ideal Outcome:
        </label>
        <input
          type="text"
          id="idealOutcome"
          name="idealOutcome"
          value={quizData.idealOutcome}
          onChange={handleQuizChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button  disabled={createdQuizId && true} type="submit" 
    className="
     py-2
     px-4
     rounded
     hover:bg-blue-600
     hover:text-white
     hover:border-blue-600
     disabled:bg-gray-400
     disabled:text-gray-700
     disabled:border-gray-400
     bg-blue-500
     text-white border
     border-blue-500">
        Create Quiz
      </button>
    </form>

    </>
  );
};

export default QuizForm;