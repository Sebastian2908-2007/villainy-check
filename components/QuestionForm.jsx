import React, { useState,useEffect } from 'react';

const QuestionForm = ({
    createdQuestionIds,
    setCreatedQuestionIds,
    createdQuizId,
    quesAnswerMediator,
    setQuesAnswerMediator,
    setCurrentQuesId,
    setRecommendEnabler,
    recomendEnabler,
    updateQuizData
}) => {
    const quizId = createdQuizId;
  const [questionData, setQuestionData] = useState({
    ques1: '',
    ques2: '',
  });
  const handleButtonClick = () => {
    // Toggle isDisabled to the opposite of its current value
    setRecommendEnabler((prevState) => !prevState);
  };
  const handleQuestionChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuesSubmit = async (e) => {
    e.preventDefault();
    setQuestionData({
        ...questionData,
        quizId: quizId
    });
    try {
        // Send questionData to your API endpoint using fetch or Axios
       
        const response = await fetch('/api/Question', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             quizId:quizId,
             ques1: questionData.ques1,
             ques2: questionData.ques2
          }),
        });
  
        if (response.status === 201) {
          // Successfully created a new question
          const { question } = await response.json();
  
          // Store the created question's _id
          setCreatedQuestionIds([...createdQuestionIds, question._id]);
  
          // Clear the form or handle success states
          setQuestionData({
            ques1: '',
            ques2: '',
          });
          setQuesAnswerMediator(true);
          setCurrentQuesId(question._id);
          await updateQuizData(quizId);
        } else {
          // Handle error states, e.g., show an error message
          console.error('Error creating question:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating question:', error.message);
      }
  };
  return (
    <div className=''>
    <form onSubmit={handleQuesSubmit}>
      <div className="mb-4">
        <label htmlFor="ques1" className="block font-medium">
          Question A:
        </label>
        <input
          type="text"
          id="ques1"
          name="ques1"
          value={questionData.ques1}
          onChange={handleQuestionChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ques2" className="block font-medium">
          Question B:
        </label>
        <input
          type="text"
          id="ques2"
          name="ques2"
          value={questionData.ques2}
          onChange={handleQuestionChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button type="submit" 
      disabled={quesAnswerMediator || !createdQuizId || recomendEnabler ? true:false}
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
     disabled:border-gray-400
     ">
        Create Question
      </button>
    </form>
    {createdQuestionIds.length > 0 ?
      <button 
      onClick={handleButtonClick} 
    className="
    mt-4
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
        
        {recomendEnabler ?   'Add more Q&As': 'done adding Q&As'}
      </button>
:null}
    </div>
  );
};

export default QuestionForm;

/** maybe use later
    {createdQuestionIds.length > 0 ?
      <button 
      
      onClick={handleButtonClick} 
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
        
        {isDisabled ?   'Add more Q&As': 'done adding Q&As'}
      </button>
:null}
 */
