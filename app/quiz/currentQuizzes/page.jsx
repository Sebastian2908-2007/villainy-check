"use client"

import React, { useState, useEffect } from 'react';

const CurrentQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quiz data from the API here
    async function fetchQuizzes() {
      try {
        const response = await fetch('http://localhost:3000/api/Quiz'); // Replace with your API endpoint
        const data = await response.json();
        setQuizzes(data.quizzes);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    }

    fetchQuizzes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Current Quizzes (Admin View)</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{quiz.quizTitle}</h2>
            <p className="text-gray-500 mb-2">Ideal Outcome: {quiz.idealOutcome}</p>
            <div className="space-y-2">
              {quiz.questions.map((question) => (
                <div key={question._id}>
                  <h3 className="text-md font-medium">A. {question.ques1}</h3>
                  <h3 className="text-md font-medium">B. {question.ques2}</h3>
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
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Outcome Recommendations:</h3>
              {quiz.outcomeRecommendations.map((recommendation) => (
                <div key={recommendation._id} className="mt-2">
                  <p className="text-md font-medium">Type: {recommendation.typeOfRecommendation}</p>
                  <p className="text-md">Results Meaning: {recommendation.resultsMeaning}</p>
                  <p className="text-md">Tips Summary: {recommendation.tipsSummary}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentQuizzes;
