'use client';

import React, { useState,useEffect } from 'react';
import Select from './Select';
import { recommendOptions } from '@/utils/constants';
import Tiptap from './TipTap';
import TiptapTwo from './TipTapTwo';
const QuizRecommendForm = ({recomendEnabler,createdQuizId,updateQuizData}) => {
  const [recommendData, setRecommendData] = useState({
    typeOfRecommendation: 'far right ideal left',
    resultsMeaning: '',
    tipsSummary: '',
  });

  /**Added Jan 24 2023 */
  const [finishSubmitted,setFinishSubmitted] = useState(null);
 

  const handleRecommendChange = (e) => {
  
    setRecommendData({
      ...recommendData,
      [e.target.name]: e.target.value,
    });
  };


  const handleRecommendSubmit = async (e) => {
    e.preventDefault();
    setFinishSubmitted(true);
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
        setFinishSubmitted(false);
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
        setFinishSubmitted(false);
        await updateQuizData(createdQuizId);
       
      }
    } catch (error) {
      console.error('Error:', error);
      setFinishSubmitted(false);
      // Handle errors that occur during the fetch or JSON parsing
      // You can set an error state or display an error message to the user
    }
  };

useEffect(() => {console.log(recommendData)},[recommendData]);
  return (
    <div >
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
        Our Recommendations:
        </label>
        {/*<input
          type="text"
          id="resultsMeaning"
          name="resultsMeaning"
          value={recommendData.resultsMeaning}
          onChange={handleRecommendChange}
          className="w-full border rounded p-2"
          required
        />*/}
        <Tiptap finishSubmitted={finishSubmitted} setRecommendData={setRecommendData} recommendData={recommendData}/>
      </div>
      <div className="mb-4">
        <label htmlFor="tipsSummary" className="block font-medium">
        How to coach this person:
        </label>
        {/*<input
          type="text"
          id="tipsSummary"
          name="tipsSummary"
          value={recommendData.tipsSummary}
          onChange={handleRecommendChange}
          className="w-full border rounded p-2"
          required
      />*/}
      <TiptapTwo finishSubmitted={finishSubmitted} setRecommendData={setRecommendData} recommendData={recommendData} />
      </div>
      {finishSubmitted ? 
              <button
      disabled={true}
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
   onClick={handleRecommendSubmit}
      >
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...submitting
            </button>
            
            :
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
   onClick={handleRecommendSubmit}
      >
        Create Recommendation
      </button>

          }
    </div>
  );
};

export default QuizRecommendForm;


/*

{finishSubmitted ? 
              <button
      disabled={true}
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
   onClick={handleRecommendSubmit}
      >
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...submitting
            </button>
            
            :
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
   onClick={handleRecommendSubmit}
      >
        Create Recommendation
      </button>

          }

*/