'use client';

import React, { useState,useEffect } from 'react';
import Select from './Select';
import { recommendOptions,answerTypeOptions } from '@/utils/constants';
const QuizRecommendForm = ({recomendEnabler,setRecommendEnabler,createdQuizId,updateQuizData}) => {
  const [recommendData, setRecommendData] = useState({
    typeOfRecommendation: '',
    resultsMeaning: '',
    tipsSummary: '',
  });

  const handleRecommendChange = (e) => {
    console.log(e.target.name);
    setRecommendData({
      ...recommendData,
      [e.target.name]: e.target.value,
    });
  };
useEffect(() => {console.log(recommendData)},[recommendData]);

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
        const responseData = await response.json();
        console.log('Recommendation created:', responseData);
  
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
        />

        <input
          type="text"
          id="typeOfRecommendation"
          name="typeOfRecommendation"
          value={recommendData.typeOfRecommendation}
          onChange={handleRecommendChange}
          className="w-full border rounded p-2"
          required
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
          border-blue-500"
      >
        Create Recommendation
      </button>
    </form>
  );
};

export default QuizRecommendForm;
