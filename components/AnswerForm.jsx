import React, { useState,useEffect } from 'react';

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
    correct: '',
  });

  const handleAnswerChange = (e) => {
    setAnswerData({
      ...answerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();

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
            answerType: '',
            correct: '',
          });
          await updateQuizData(createdQuizId);
        } else {
          // Handle error states here
          console.error('Failed to create answer');
        }
      } catch (error) {
        console.error('Error creating answer:', error);
      }

    // Clear the form or handle success/error states
  };
useEffect(
    () => {
        console.log(currentQuesId);
        if(answerCount === 0){
            setQuesAnswerMediator(false);
             setAnswerCount(4);
             setCurrentQuesId(null);
        }
    },[answerCount])
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
        <input
          type="text"
          id="answerType"
          name="answerType"
          value={answerData.answerType}
          onChange={handleAnswerChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="correct" className="block font-medium">
          Correct:
        </label>
        <input
          type="text"
          id="correct"
          name="correct"
          value={answerData.correct}
          onChange={handleAnswerChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button 
      disabled={quesAnswerMediator ? false:true}
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
        Create Answer
      </button>
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
