import React, { useState } from 'react';

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
  /**Added Jan 24 2023 */
  const [finishSubmitted,setFinishSubmitted] = useState(null);

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
    setFinishSubmitted(true);
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
          setFinishSubmitted(false);
          setQuesAnswerMediator(true);
          setCurrentQuesId(question._id);
          await updateQuizData(quizId);
        } else {
          // Handle error states, e.g., show an error message
          console.error('Error creating question:', response.statusText);
          setFinishSubmitted(false);
        }
      } catch (error) {
        console.error('Error creating question:', error.message);
        setFinishSubmitted(false);
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
      {finishSubmitted ? 
            <button type="submit" 
      disabled={true}
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
       
      
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...submitting
            </button>
            
            :
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


          }
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

