'use client';

import React, { useState } from 'react';
import Select from './Select';
import { recommendOptions,answerTypeOptions } from '@/utils/constants';
const QuizRecommendForm = ({recomendEnabler,setRecommendEnabler,createdQuizId,updateQuizData}) => {
  const [recommendData, setRecommendData] = useState({
    typeOfRecommendation: 'far right',
    resultsMeaning: '',
    tipsSummary: '',
  });

  const handleRecommendChange = (e) => {
  
    setRecommendData({
      ...recommendData,
      [e.target.name]: e.target.value,
    });
  };


  const handleRecommendSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Construct the data to send
      const recommendationData = {
        quizId: createdQuizId, // Replace with the actual quiz ID
        typeOfRecommendation: recommendData.typeOfRecommendation,
        resultsMeaning: recommendData.resultsMeaning,
        tipsSummary: recommendData.tipsSummary,
      };
  
      // Make a POST request to your API endpoint
      const response = await fetch('/api/QuizRecommends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recommendationData),
      });
  
      if (!response.ok) {
        // Handle error responses here
        console.error('Error:', response.status);
        // You can set an error state or display an error message to the user
      } else {
        // Successful response, you can handle success here
        // Clear the form
        setRecommendData({
          typeOfRecommendation: '',
          resultsMeaning: '',
          tipsSummary: '',
        });
  
        // Handle any other success actions you need
        await updateQuizData(createdQuizId);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors that occur during the fetch or JSON parsing
      // You can set an error state or display an error message to the user
    }
  };


  return (
    <form onSubmit={handleRecommendSubmit}>
      <div className="mb-4">
        <label htmlFor="typeOfRecommendation" className="block font-medium">
          Type of Recommendation:
        </label>

        <Select
        options={recommendOptions}
        selectedValue={recommendData.typeOfRecommendation}
        onChange={handleRecommendChange}
        name={"typeOfRecommendation"}
        />

       
      </div>
      <div className="mb-4">
        <label htmlFor="resultsMeaning" className="block font-medium">
          Results Meaning:
        </label>
        <input
          type="text"
          id="resultsMeaning"
          name="resultsMeaning"
          value={recommendData.resultsMeaning}
          onChange={handleRecommendChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tipsSummary" className="block font-medium">
          Tips Summary:
        </label>
        <input
          type="text"
          id="tipsSummary"
          name="tipsSummary"
          value={recommendData.tipsSummary}
          onChange={handleRecommendChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button
      disabled={!recomendEnabler ? true:false}
        type="submit"
        className="
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
      focus:shadow-outline
   disabled:bg-gray-400
   disabled:text-gray-700
   disabled:border-gray-400"
      >
        Create Recommendation
      </button>
    </form>
  );
};

export default QuizRecommendForm;
