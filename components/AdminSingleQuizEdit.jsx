import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveAsIcon from '@mui/icons-material/SaveAs';

export default function AdminSingleQuizEdit({ quiz }) {
  
  const [openQuestions, setOpenQuestions] = useState([]);
  const [openAnswers, setOpenAnswers] = useState([]);
  const [openRecommendations, setOpenRecommendations] = useState([]);
  const [isEditingQuiz, setIsEditingQuiz] = useState(false);
  const [isEditingQuestion, setIsEditingQuestion] = useState({});
  const [isEditingAnswer, setIsEditingAnswer] = useState({});
  const [isEditingRecommendation, setIsEditingRecommendation] = useState({});
  const [workingQuizData, setWorkingQuizData] = useState(quiz);
  const toggleEditingQuiz = () => {
    setIsEditingQuiz(!isEditingQuiz);
  };

  const toggleQuestions = (questionId) => {
    if (openQuestions.includes(questionId)) {
      setOpenQuestions(openQuestions.filter((id) => id !== questionId));
    } else {
      setOpenQuestions([...openQuestions, questionId]);
    }
  };

  const toggleAnswers = (questionId) => {
    if (openAnswers.includes(questionId)) {
      setOpenAnswers(openAnswers.filter((id) => id !== questionId));
    } else {
      setOpenAnswers([...openAnswers, questionId]);
    }
  };

  const toggleRecommendations = () => {
    setOpenRecommendations(!openRecommendations);
  };

  const toggleEditingQuestion = (questionId) => {
    setIsEditingQuestion({
      ...isEditingQuestion,
      [questionId]: !isEditingQuestion[questionId],
    });
  };

  const toggleEditingAnswer = (questionId, answerId) => {
    setIsEditingAnswer({
      ...isEditingAnswer,
      [questionId]: {
        ...isEditingAnswer[questionId],
        [answerId]: !isEditingAnswer[questionId]?.[answerId],
      },
    });
  };

  const toggleEditingRecommendation = (recommendationId) => {
    setIsEditingRecommendation({
      ...isEditingRecommendation,
      [recommendationId]: !isEditingRecommendation[recommendationId],
    });
  };

  const handleEditQuestion = async (questionId) => {
    try {
      const editedQuestion = workingQuizData.questions.find((q) => q._id === questionId);
      const updatedData = {
        ques1: editedQuestion.ques1,
        ques2: editedQuestion.ques2,
        // Add or update other fields as needed
      };

      const response = await fetch(`/api/Question/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId,
          ques1: editedQuestion.ques1,
          ques2: editedQuestion.ques2,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error updating question data: ${response.statusText}`);
      }

      const data = await response.json();

      console.log('Question data updated:', data);

      setWorkingQuizData({
        ...workingQuizData,
        questions: quiz.questions.map((q) =>
          q._id === questionId ? { ...q, ...updatedData } : q
        ),
      });

      setIsEditingQuestion({
        ...isEditingQuestion,
        [questionId]: false,
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleEditAnswer = async (questionId, answerId) => {
    const editedAnswer = workingQuizData.questions
      .find((q) => q._id === questionId)
      .answers.find((a) => a._id === answerId);

    try {
      const response = await fetch('/api/Answer', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answerId: answerId,
          answerTxt: editedAnswer.answerTxt,
          answerType: editedAnswer.answerType,
        }),
      });

      if (response.ok) {
        setIsEditingAnswer({
          ...isEditingAnswer,
          [questionId]: {
            ...isEditingAnswer[questionId],
            [answerId]: false,
          },
        });

        setWorkingQuizData({
          ...workingQuizData,
          questions: workingQuizData.questions.map((q) =>
            q._id === questionId
              ? {
                  ...q,
                  answers: q.answers.map((a) =>
                    a._id === answerId ? editedAnswer : a
                  ),
                }
              : q
          ),
        });
      } else {
        console.error('Failed to update answer.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleEditQuiz = async (quizId) => {
    try {
      const updatedData = {
        quizTitle: workingQuizData.quizTitle,
       // quizOutcome: workingQuizData.quizOutcome,
       // idealOutcome: workingQuizData.idealOutcome,
        // Add or update other fields as needed
      };

      const response = await fetch(`/api/Quiz`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quizId, updatedData }),
      });

      if (!response.ok) {
        throw  Error(`Error updating quiz data: ${response.statusText}`);
      }

      const data = await response.json();

      console.log('Quiz data updated:', data);
      setWorkingQuizData({ ...workingQuizData, ...updatedData });
      setIsEditingQuiz(false);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleEditRecommendation = async (recommendationId) => {
    const editedRecommendation = workingQuizData.outcomeRecommendations.find(
      (r) => r._id === recommendationId
    );
console.log(editedRecommendation);
    try {
      const response = await fetch('/api/QuizRecommends', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recommendationId: recommendationId,
          resultsMeaning: editedRecommendation.resultsMeaning,
          tipsSummary: editedRecommendation.tipsSummary,
          typeOfRecommendation: editedRecommendation.typeOfRecommendation,
        }),
      });

      if (response.ok) {
        setIsEditingRecommendation({
          ...isEditingRecommendation,
          [recommendationId]: false,
        });

        setWorkingQuizData({
          ...workingQuizData,
          outcomeRecommendations: workingQuizData.outcomeRecommendations.map((r) =>
            r._id === recommendationId ? editedRecommendation : r
          ),
        });
      } else {
        console.error('Failed to update recommendation.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleDeleteQuiz = async () => {
    try {
      const quizId = workingQuizData._id;
      console.log(quizId);
      
  
      // Send a DELETE request with the productId in the body
      const response = await fetch('/api/Quiz', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({quizId}),
      });
  
      if (!response.ok) {
        throw new Error(`Error deleting Quiz: ${response.statusText}`);
      }
  
      // Handle the response or any necessary state updates
      console.log('Product deleted successfully.');
  
      // You might want to clear the product data or perform other actions after deletion
      setWorkingQuizData(null);
    } catch (error) {
      console.error('An error occurred while deleting:', error);
      // Handle the error if needed
    }
  };

  return (
    workingQuizData &&
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Current Quiz (Admin View)</h1>

      <div key={quiz._id} className="border p-4 rounded-md shadow-md w-full">
       


        <div className="w-full bg-gray-300 p-4 flex justify-between mb-4">
        <button className="text-blue-500 hover:underline" onClick={toggleEditingQuiz}>
          {isEditingQuiz ? (
            <SaveAsIcon onClick={() => handleEditQuiz(quiz._id)} />
          ) : (
            <EditIcon />
          )}
        </button>
          
          <button
          className=" top-2 right-2 text-red-500 hover:text-red-700"
          onClick={handleDeleteQuiz}
        >
          Delete
        </button>
       </div>

        <h2 className="text-lg font-semibold">
          Quiz Name:{' '}
          {isEditingQuiz ? (
            <input
              className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
              type="text"
              value={workingQuizData.quizTitle}
              onChange={(e) =>
                setWorkingQuizData({ ...workingQuizData, quizTitle: e.target.value })
              }
            />
          ) : (
            workingQuizData.quizTitle
          )}
        </h2>

        {/*<p className="text-gray-500 mb-2">
          Ideal Outcome:{' '}
          {isEditingQuiz ? (
            <input
              className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
              type="text"
              value={workingQuizData.idealOutcome}
              onChange={(e) =>
                setWorkingQuizData({ ...workingQuizData, idealOutcome: e.target.value })
              }
            />
          ) : (
            workingQuizData.idealOutcome
          )}
          </p>*/}

        <div className="space-y-2">
          {workingQuizData.questions.map((question) => (
            <div key={question._id}>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => toggleQuestions(question._id)}
              >
                {openQuestions.includes(question._id) ? 'Hide Question' : 'View Question'}
              </button>
              {isEditingQuestion[question._id] ? (
                <>
                  <button
                    className="text-blue-500 hover:underline ml-2"
                    onClick={() => toggleEditingQuestion(question._id)}
                  >
                    {isEditingQuestion[question._id] ? (
                      <SaveAsIcon onClick={() => handleEditQuestion(question._id)} />
                    ) : (
                      <EditIcon />
                    )}
                  </button>
                  <div>
                    <input
                      className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                      type="text"
                      value={question.ques1}
                      onChange={(e) =>
                        setWorkingQuizData({
                          ...workingQuizData,
                          questions: workingQuizData.questions.map((q) =>
                            q._id === question._id ? { ...q, ques1: e.target.value } : q
                          ),
                        })
                      }
                    />
                    <input
                      className="p-2 mt-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                      type="text"
                      value={question.ques2}
                      onChange={(e) =>
                        setWorkingQuizData({
                          ...quiz,
                          questions: workingQuizData.questions.map((q) =>
                            q._id === question._id ? { ...q, ques2: e.target.value } : q
                          ),
                        })
                      }
                    />
                  </div>
                </>
              ) : (
                openQuestions.includes(question._id) && (
                  <>
                    <button
                      className="text-blue-500 hover:underline ml-2"
                      onClick={() => toggleEditingQuestion(question._id)}
                    >
                      {isEditingQuestion[question._id] ? <SaveAsIcon /> : <EditIcon />}
                    </button>
                    <div>
                      <h3 className="text-md font-medium">A. {question.ques1}</h3>
                      <h3 className="text-md font-medium">B. {question.ques2}</h3>
                    </div>
                  </>
                )
              )}
              {openQuestions.includes(question._id) && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => toggleAnswers(question._id)}
                >
                  {openAnswers.includes(question._id) ? 'Hide Answers' : 'View Answers'}
                </button>
              )}
              {openAnswers.includes(question._id) && (
                <ul className="list-disc pl-5">
                  {question.answers.map((answer) => (
                    <li
                      key={answer._id}
                      className={`${
                        answer.correct === 'true' ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => toggleEditingAnswer(question._id, answer._id)}
                      >
                        {isEditingAnswer[question._id]?.[answer._id] ? (
                          <SaveAsIcon
                            onClick={() => handleEditAnswer(question._id, answer._id)}
                          />
                        ) : (
                          <EditIcon />
                        )}
                      </button>
                      {isEditingAnswer[question._id]?.[answer._id] ? (
                        <div>
                          <input
                            className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                            type="text"
                            value={answer.answerTxt}
                            onChange={(e) =>
                              setWorkingQuizData({
                                ...workingQuizData,
                                questions: workingQuizData.questions.map((q) =>
                                  q._id === question._id
                                    ? {
                                        ...q,
                                        answers: q.answers.map((a) =>
                                          a._id === answer._id
                                            ? { ...a, answerTxt: e.target.value }
                                            : a
                                        ),
                                      }
                                    : q
                                ),
                              })
                            }
                          />
                          <input
                            className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                            type="text"
                            value={answer.answerType}
                            onChange={(e) =>
                              setWorkingQuizData({
                                ...workingQuizData,
                                questions: workingQuizData.questions.map((q) =>
                                  q._id === question._id
                                    ? {
                                        ...q,
                                        answers: q.answers.map((a) =>
                                          a._id === answerId
                                            ? { ...a, answerType: e.target.value }
                                            : a
                                        ),
                                      }
                                    : q
                                ),
                              })
                            }
                          />
                        </div>
                      ) : (
                        `${answer.answerTxt} (${answer.answerType})`
                      )}
                    </li>
                  ))}
                </ul>
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
              {workingQuizData.outcomeRecommendations.map((recommendation) => (
                <div key={recommendation._id} className="mt-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => toggleEditingRecommendation(recommendation._id)}
                  >
                    {isEditingRecommendation[recommendation._id] ? (
                      <SaveAsIcon onClick={() => handleEditRecommendation(recommendation._id)} />
                    ) : (
                      <EditIcon />
                    )}
                  </button>
                  {isEditingRecommendation[recommendation._id] ? (
                    <div>
                      <input
                        className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                        type="text"
                        value={recommendation.typeOfRecommendation}
                        onChange={(e) =>
                          setWorkingQuizData({
                            ...workingQuizData,
                            outcomeRecommendations: workingQuizData.outcomeRecommendations.map((r) =>
                              r._id === recommendation._id
                                ? { ...r, typeOfRecommendation: e.target.value }
                                : r
                            ),
                          })
                        }
                      />
                      <input
                        className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                        type="text"
                        value={recommendation.resultsMeaning}
                        onChange={(e) =>
                          setWorkingQuizData({
                            ...workingQuizData,
                            outcomeRecommendations: workingQuizData.outcomeRecommendations.map((r) =>
                              r._id === recommendation._id
                                ? { ...r, resultsMeaning: e.target.value }
                                : r
                            ),
                          })
                        }
                      />
                      <input
                        className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                        type="text"
                        value={recommendation.tipsSummary}
                        onChange={(e) =>
                          setWorkingQuizData({
                            ...workingQuizData,
                            outcomeRecommendations: workingQuizData.outcomeRecommendations.map((r) =>
                              r._id === recommendation._id
                                ? { ...r, tipsSummary: e.target.value }
                                : r
                            ),
                          })
                        }
                      />
                    </div>
                  ) : (
                    <div>
                      <p className="text-md font-medium">Type: {recommendation.typeOfRecommendation}</p>
                      <p className="text-md ">Results Meaning: {recommendation.resultsMeaning}</p>
                      <p className="text-md ">Tips Summary: {recommendation.tipsSummary}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}


