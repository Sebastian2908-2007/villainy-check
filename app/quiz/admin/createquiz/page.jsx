"use client"

import React, { useState } from 'react';
import QuizForm from '@/components/QuizForm';
import QuestionForm from '@/components/QuestionForm';
import AnswerForm from '@/components/AnswerForm';
const CreateQuiz = () => {
    const [createdQuizId,setCreatedQuizId] = useState(null);
    const [currentQuesId,setCurrentQuesId] = useState(null);
    const [createdQuestionIds,setCreatedQuestionIds] = useState([]);
    const [createdAnswerIds,setCreatedAnswerIds] = useState([]);
    const [quesAnswerMediator,setQuesAnswerMediator] = useState(null);
    const [answerCount,setAnswerCount] = useState(4);
  return (
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
/>
<AnswerForm 
quesAnswerMediator={quesAnswerMediator}
setQuesAnswerMediator={setQuesAnswerMediator}
 createdAnswerIds={createdAnswerIds}
 setCreatedAnswerIds={setCreatedAnswerIds}
 answerCount={answerCount}
 setAnswerCount={setAnswerCount}
 currentQuesId={currentQuesId}setCurrentQuesId={setCurrentQuesId}
 />
    </>
  );
};

export default CreateQuiz;
