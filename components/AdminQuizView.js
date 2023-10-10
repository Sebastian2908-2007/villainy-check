import React, { useState } from 'react';

export default function AdminQuizView({ workingQuizData, setWorkingQuizData }) {
  const quiz = workingQuizData;

  // State to keep track of which questions, answers, and recommendations are open
  const [openQuestions, setOpenQuestions] = useState([]);
  const [openAnswers, setOpenAnswers] = useState([]);
  const [openRecommendations, setOpenRecommendations] = useState([]);

  // Function to toggle the open/closed state of questions
  const toggleQuestions = (questionId) => {
    if (openQuestions.includes(questionId)) {
      // If the question is open, close it
      setOpenQuestions(openQuestions.filter((id) => id !== questionId));
    } else {
      // If the question is closed, open it
      setOpenQuestions([...openQuestions, questionId]);
    }
  };

  // Function to toggle the open/closed state of answers for a question
  const toggleAnswers = (questionId) => {
    if (openAnswers.includes(questionId)) {
      // If the answers are open, close them
      setOpenAnswers(openAnswers.filter((id) => id !== questionId));
    } else {
      // If the answers are closed, open them
      setOpenAnswers([...openAnswers, questionId]);
    }
  };

  // Function to toggle the open/closed state of recommendations
  const toggleRecommendations = () => {
    setOpenRecommendations(!openRecommendations);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Current Quiz (Admin View)</h1>

      <div key={quiz._id} className="border p-4 rounded-md shadow-md w-full">
        <h2 className="text-lg font-semibold">{quiz.quizTitle}</h2>
        <p className="text-gray-500 mb-2">Ideal Outcome: {quiz.idealOutcome}</p>
        <div className="space-y-2">
          {quiz.questions.map((question) => (
            <div key={question._id}>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => toggleQuestions(question._id)}
              >
                {openQuestions.includes(question._id) ? 'Hide Question' : 'View Question'}
              </button>
              {openQuestions.includes(question._id) && (
                <div>
                  <h3 className="text-md font-medium">A. {question.ques1}</h3>
                  <h3 className="text-md font-medium">B. {question.ques2}</h3>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => toggleAnswers(question._id)}
                  >
                    {openAnswers.includes(question._id) ? 'Hide Answers' : 'View Answers'}
                  </button>
                  {openAnswers.includes(question._id) && (
                    <ul className="list-disc pl-5">
                      {question.answers.map((answer) => (
                        <li
                          key={answer._id}
                          className={`${
                            answer.correct === 'true' ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {answer.answerTxt} ({answer.answerType})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleRecommendations}
          >
            {openRecommendations ? 'Hide Recommendations' : 'View Recommendations'}
          </button>
          {openRecommendations && (
            <div>
              <h3 className="text-lg font-semibold">Outcome Recommendations:</h3>
              {quiz.outcomeRecommendations.map((recommendation) => (
                <div key={recommendation._id} className="mt-2">
                  <p className="text-md font-medium">Type: {recommendation.typeOfRecommendation}</p>
                  <p className="text-md ">Results Meaning: {recommendation.resultsMeaning}</p>
                  <p className="text-md ">Tips Summary: {recommendation.tipsSummary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
