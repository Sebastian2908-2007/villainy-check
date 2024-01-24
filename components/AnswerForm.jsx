import React, { useState,useEffect } from 'react';
import { answerTypeOptions,trueFalseOptions } from '@/utils/constants';
import Select from './Select';

const AnswerForm = ({
    quesAnswerMediator,
    setQuesAnswerMediator,
    answerCount,
    setAnswerCount,
    currentQuesId,
    setCurrentQuesId,
    createdQuizId,
    updateQuizData
}) => {
  const [answerData, setAnswerData] = useState({
    answerTxt: '',
    answerType: '',
    correct: 'false',
  });

  /**Added Jan 24 2023 */
  const [finishSubmitted,setFinishSubmitted] = useState(null);

  const handleAnswerChange = (e) => {
    setAnswerData({
      ...answerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    setFinishSubmitted(true);
    try {
        const response = await fetch('/api/Answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            questionId: currentQuesId,
            ...answerData,
          }),
        });
  
        if (response.status === 201) {
          // Successfully created answer
          setAnswerCount(answerCount - 1);
          setAnswerData({
            answerTxt: '',
            answerType: 'far right',
            correct: 'false',
          });
          await updateQuizData(createdQuizId);
          setFinishSubmitted(false);
        } else {
          // Handle error states here
          console.error('Failed to create answer');
          setFinishSubmitted(false);
        }
      } catch (error) {
        console.error('Error creating answer:', error);
        setFinishSubmitted(false);
      }

    // Clear the form or handle success/error states
  };
useEffect(
    () => {
    
        if(answerCount === 0){
            setQuesAnswerMediator(false);
             setAnswerCount(7);
             setCurrentQuesId(null);
        }
    },[answerCount]);


  return (
    <form onSubmit={handleAnswerSubmit}>
       {quesAnswerMediator ? <span>{answerCount}</span>:null}
      <div className="mb-4">
        <label htmlFor="answerTxt" className="block font-medium">
          Answer Text:
        </label>
        <input
          type="text"
          id="answerTxt"
          name="answerTxt"
          value={answerData.answerTxt}
          onChange={handleAnswerChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="answerType" className="block font-medium">
          Answer Type:
        </label>

        <Select
        options={answerTypeOptions}
        selectedValue={answerData.answerType}
        onChange={handleAnswerChange}
        name={"answerType"}
        />

      
      </div>
      <div className="mb-4">
        <label htmlFor="correct" className="block font-medium">
          Correct:
        </label>

        <Select
        options={trueFalseOptions}
        selectedValue={answerData.correct}
        onChange={handleAnswerChange}
        name={"correct"}
        />

     
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
      >
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...submitting
            </button>
            
            :
         <button 
      disabled={quesAnswerMediator ? false:true}
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
        Create Answer
      </button>

          }
    </form>
  );
};

export default AnswerForm;

/***make answer counter variable top level in /quiz/admin/createquiz/page.jsx*** 
 * pass it to AnswerForm as well as questionForm
 * have it default to a value that has add answer buttons disabled untill its set differently
 * on question submission once answer add counter reaches four or equivilant logic
 * set the variable back to disable state untill user adds another question
 * then start the process over
 */

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
      >
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...submitting
            </button>
            
            :
         <button 
      disabled={quesAnswerMediator ? false:true}
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
        Create Answer
      </button>

          }

*/
