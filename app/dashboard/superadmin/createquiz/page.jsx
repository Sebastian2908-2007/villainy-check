"use client"

import React, { useState } from 'react';
import QuizForm from '@/components/QuizForm';
import QuestionForm from '@/components/QuestionForm';
import AnswerForm from '@/components/AnswerForm';
import QuizRecommendForm from '@/components/QuizRecommendForm';
import { getSingleQuiz } from '@/utils/getData';
import AdminQuizView from '@/components/AdminQuizView';
const CreateQuiz = () => {
    const [createdQuizId,setCreatedQuizId] = useState(null);
    const [currentQuesId,setCurrentQuesId] = useState(null);
    const [createdQuestionIds,setCreatedQuestionIds] = useState([]);
    const [createdAnswerIds,setCreatedAnswerIds] = useState([]);
    const [quesAnswerMediator,setQuesAnswerMediator] = useState(null);
    const [answerCount,setAnswerCount] = useState(8);
    const [recomendEnabler,setRecommendEnabler] = useState(null);

    const [workingQuizData,setWorkingQuizData] = useState(null);
    const updateQuizData = async (quizId) => {
      const freshQuizData = await getSingleQuiz(quizId);
      console.log(freshQuizData,"updateQuizData RAN");
      setWorkingQuizData(freshQuizData);
    };
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
        <div className="lg:flex">
          {/* Left Side: Forms */}
          <div className="lg:w-1/2 pr-4">
            <QuizForm
              createdQuizId={createdQuizId}
              setCreatedQuizId={setCreatedQuizId}
              updateQuizData={updateQuizData}
            />
            <QuestionForm
              quesAnswerMediator={quesAnswerMediator}
              setQuesAnswerMediator={setQuesAnswerMediator}
              createdQuestionIds={createdQuestionIds}
              setCreatedQuestionIds={setCreatedQuestionIds}
              createdQuizId={createdQuizId}
              currentQuesId={currentQuesId}
              setCurrentQuesId={setCurrentQuesId}
              setRecommendEnabler={setRecommendEnabler}
              recomendEnabler={recomendEnabler}
              updateQuizData={updateQuizData}
            />
            <AnswerForm
              quesAnswerMediator={quesAnswerMediator}
              setQuesAnswerMediator={setQuesAnswerMediator}
              createdAnswerIds={createdAnswerIds}
              setCreatedAnswerIds={setCreatedAnswerIds}
              answerCount={answerCount}
              setAnswerCount={setAnswerCount}
              currentQuesId={currentQuesId}
              setCurrentQuesId={setCurrentQuesId}
              createdQuizId={createdQuizId}
              updateQuizData={updateQuizData}
            />
            <QuizRecommendForm
              recomendEnabler={recomendEnabler}
              setRecommendEnabler={setRecommendEnabler}
              createdQuizId={createdQuizId}
              updateQuizData={updateQuizData}
            />
          </div>
  
          {workingQuizData ?
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <AdminQuizView
              workingQuizData={workingQuizData}
              setWorkingQuizData={setWorkingQuizData}
            />
          </div>:<div>NO CREATED QUIZ YET</div>
          }
        </div>
      </div>
    );

  
};

export default CreateQuiz;



//OLD JSX
 /* return (
    <>
<QuizForm createdQuizId={createdQuizId}
setCreatedQuizId={setCreatedQuizId}
/>
<QuestionForm 
quesAnswerMediator={quesAnswerMediator}
setQuesAnswerMediator={setQuesAnswerMediator}
createdQuestionIds={createdQuestionIds}
setCreatedQuestionIds={setCreatedQuestionIds}
createdQuizId={createdQuizId}
currentQuesId={currentQuesId}setCurrentQuesId={setCurrentQuesId}
setRecommendEnabler={setRecommendEnabler}
recomendEnabler={recomendEnabler}
/>
<AnswerForm 
quesAnswerMediator={quesAnswerMediator}
setQuesAnswerMediator={setQuesAnswerMediator}
 createdAnswerIds={createdAnswerIds}
 setCreatedAnswerIds={setCreatedAnswerIds}
 answerCount={answerCount}
 setAnswerCount={setAnswerCount}
 currentQuesId={currentQuesId}setCurrentQuesId={setCurrentQuesId}
 createdQuizId={createdQuizId}
 />
 <QuizRecommendForm
  recomendEnabler={recomendEnabler}
  setRecommendEnabler={setRecommendEnabler}
  createdQuizId={createdQuizId}
  />

    </>
    
  );*/



/*
  <button
  onClick={() => {getSingleQuiz(createdQuizId)}}
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
  >get quiz</button>
*/
