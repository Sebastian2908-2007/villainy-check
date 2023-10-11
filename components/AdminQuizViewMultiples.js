import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveAsIcon from '@mui/icons-material/SaveAs';

export default function AdminQuizViewMultiples({ workingQuizData, setWorkingQuizData }) {
    
    const [quiz,setQuiz] = useState(workingQuizData);
  
    // State to keep track of which questions, answers, and recommendations are open
    const [openQuestions, setOpenQuestions] = useState([]);
    const [openAnswers, setOpenAnswers] = useState([]);
    const [openRecommendations, setOpenRecommendations] = useState([]);
    const [isEditingQuiz, setIsEditingQuiz] = useState(false);
    const [isEditingQuestion, setIsEditingQuestion] = useState({});
    const [isEditingAnswer, setIsEditingAnswer] = useState({});
    const [isEditingRecommendation, setIsEditingRecommendation] = useState({});
  // Function to toggle editing mode for the quiz
  const toggleEditingQuiz = () => {
    setIsEditingQuiz(!isEditingQuiz);
  };
    // Function to toggle the open/closed state of questions
    const toggleQuestions = (questionId) => {
      if (openQuestions.includes(questionId)) {
        setOpenQuestions(openQuestions.filter((id) => id !== questionId));
      } else {
        setOpenQuestions([...openQuestions, questionId]);
      }
    };
  
    // Function to toggle the open/closed state of answers for a question
    const toggleAnswers = (questionId) => {
      if (openAnswers.includes(questionId)) {
        setOpenAnswers(openAnswers.filter((id) => id !== questionId));
      } else {
        setOpenAnswers([...openAnswers, questionId]);
      }
    };
  
    // Function to toggle the open/closed state of recommendations
    const toggleRecommendations = () => {
      setOpenRecommendations(!openRecommendations);
    };
  
    // Function to toggle editing mode for questions
    const toggleEditingQuestion = (questionId) => {
      setIsEditingQuestion({
        ...isEditingQuestion,
        [questionId]: !isEditingQuestion[questionId],
      });
    };
  
    // Function to toggle editing mode for answers
    const toggleEditingAnswer = (questionId, answerId) => {
      setIsEditingAnswer({
        ...isEditingAnswer,
        [questionId]: {
          ...isEditingAnswer[questionId],
          [answerId]: !isEditingAnswer[questionId]?.[answerId],
        },
      });
    };
  
    // Function to toggle editing mode for recommendations
    const toggleEditingRecommendation = (recommendationId) => {
      setIsEditingRecommendation({
        ...isEditingRecommendation,
        [recommendationId]: !isEditingRecommendation[recommendationId],
      });
    };
  
    // Function to update edited data for questions
    const handleEditQuestion = (questionId) => {
      const editedQuestion = quiz.questions.find((q) => q._id === questionId);
      // Perform any necessary data validation or updating logic here
      // Once editing is done, you can update the state or send data to the server
      // For simplicity, we'll just switch back to view mode in this example
      setIsEditingQuestion({
        ...isEditingQuestion,
        [questionId]: false,
      });
      setWorkingQuizData({
        ...quiz,
        questions: quiz.questions.map((q) =>
          q._id === questionId ? editedQuestion : q
        ),
      });
    };
  
    // Function to update edited data for answers
    const handleEditAnswer = (questionId, answerId) => {
      const editedAnswer = quiz.questions
        .find((q) => q._id === questionId)
        .answers.find((a) => a._id === answerId);
      // Perform any necessary data validation or updating logic here
      // Once editing is done, you can update the state or send data to the server
      // For simplicity, we'll just switch back to view mode in this example
      setIsEditingAnswer({
        ...isEditingAnswer,
        [questionId]: {
          ...isEditingAnswer[questionId],
          [answerId]: false,
        },
      });
      setWorkingQuizData({
        ...quiz,
        questions: quiz.questions.map((q) =>
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
    };
  
    const handleEditQuiz = (quizId) => {
      // Perform any necessary data validation or updating logic here
      // Once editing is done, you can update the state or send data to the server
      // For simplicity, we'll just switch back to view mode in this example
      setIsEditingQuiz(false);
      setWorkingQuizData({ ...quiz }); // Update with edited quiz data
    };
  
    // Function to update edited data for recommendations
    const handleEditRecommendation = (recommendationId) => {
      const editedRecommendation = quiz.outcomeRecommendations.find(
        (r) => r._id === recommendationId
      );
      // Perform any necessary data validation or updating logic here
      // Once editing is done, you can update the state or send data to the server
      // For simplicity, we'll just switch back to view mode in this example
      setIsEditingRecommendation({
        ...isEditingRecommendation,
        [recommendationId]: false,
      });
      setWorkingQuizData({
        ...quiz,
        outcomeRecommendations: quiz.outcomeRecommendations.map((r) =>
          r._id === recommendationId ? editedRecommendation : r
        ),
      });
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Current Quiz (Admin View)</h1>
  
        <div key={quiz._id} className="border p-4 rounded-md shadow-md w-full">
        <button className="text-blue-500 hover:underline" onClick={toggleEditingQuiz}>
              {isEditingQuiz ? <SaveAsIcon/> : <EditIcon/>}
            </button>
          <h2 className="text-lg font-semibold">
            Quiz Name:{' '}
            {isEditingQuiz ? (
              <input
              className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={quiz.quizTitle}
                onChange={(e) =>
                  setWorkingQuizData({ ...quiz, quizTitle: e.target.value })
                }
              />
            ) : (
              quiz.quizTitle
            )}
          </h2>
          <p className="text-gray-500 mb-2">
            Ideal Outcome:{' '}
            {isEditingQuiz ? (
              <input
              className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                type="text"
                value={quiz.idealOutcome}
                onChange={(e) =>
                  setWorkingQuizData({ ...quiz, idealOutcome: e.target.value })
                }
              />
            ) : (
              quiz.idealOutcome
            )}
          </p>
          <div className="space-y-2">
            {quiz.questions.map((question) => (
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
                  {isEditingQuestion[question._id] ? <SaveAsIcon/> : <EditIcon/>}
                </button>
  
                <div>
                    <input
                    className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                      type="text"
                      value={question.ques1}
                      onChange={(e) =>
                        setWorkingQuizData({
                          ...quiz,
                          questions: quiz.questions.map((q) =>
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
                          questions: quiz.questions.map((q) =>
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
                  {isEditingQuestion[question._id] ? <SaveAsIcon/> : <EditIcon/>}
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
                          {isEditingAnswer[question._id]?.[answer._id]
                            ? <SaveAsIcon/>
                            : <EditIcon/>}
                        </button>
                        {isEditingAnswer[question._id]?.[answer._id] ? (
                          <div>
                            <input
                            className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                              type="text"
                              value={answer.answerTxt}
                              onChange={(e) =>
                                setWorkingQuizData({
                                  ...quiz,
                                  questions: quiz.questions.map((q) =>
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
                                  ...quiz,
                                  questions: quiz.questions.map((q) =>
                                    q._id === question._id
                                      ? {
                                          ...q,
                                          answers: q.answers.map((a) =>
                                            a._id === answer._id
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
            <button
              className="text-blue-500 hover:underline ml-2"
              onClick={() => toggleEditingRecommendation(quiz._id)}
            >
              
            </button>
            {openRecommendations && (
              <div>
                <h3 className="text-lg font-semibold">Outcome Recommendations:</h3>
                {quiz.outcomeRecommendations.map((recommendation) => (
                  <div key={recommendation._id} className="mt-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => toggleEditingRecommendation(recommendation._id)}
                    >
                      {isEditingRecommendation[recommendation._id]
                        ? <SaveAsIcon/>
                        : <EditIcon/>}
                    </button>
                    {isEditingRecommendation[recommendation._id] ? (
                      <div>
                        <input
                        className="p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-400 focus:border-blue-400 flex-grow"
                          type="text"
                          value={recommendation.typeOfRecommendation}
                          onChange={(e) =>
                            setWorkingQuizData({
                              ...quiz,
                              outcomeRecommendations: quiz.outcomeRecommendations.map((r) =>
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
                              ...quiz,
                              outcomeRecommendations: quiz.outcomeRecommendations.map((r) =>
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
                              ...quiz,
                              outcomeRecommendations: quiz.outcomeRecommendations.map((r) =>
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
          <div className="mt-4">
           
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  
  
  