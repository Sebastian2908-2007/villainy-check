import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveAsIcon from '@mui/icons-material/SaveAs';


export default function AdminQuizView({ workingQuizData, setWorkingQuizData }) {
const quiz = workingQuizData;
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




  const handleEditQuestion = async (questionId) => {
    try {
      // Get the edited question data
      const editedQuestion = quiz.questions.find((q) => q._id === questionId);
  
      // Prepare the updated data. You should replace this with your actual data.
      const updatedData = {
        ques1: editedQuestion.ques1,
        ques2: editedQuestion.ques2,
        // Add or update other fields as needed
      };
  
      // Send a PUT request to update the question data
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
  
      // Handle the response or update your state as needed
      console.log('Question data updated:', data);
  
      // Update your state with the edited question data
      setWorkingQuizData({
        ...quiz,
        questions: quiz.questions.map((q) =>
          q._id === questionId ? { ...q, ...updatedData } : q
        ),
      });
  
      setIsEditingQuestion({
        ...isEditingQuestion,
        [questionId]: false,
      }); // Exit edit mode
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error if needed
    }
  };
  

  const handleEditAnswer = async (questionId, answerId) => {
    console.log(questionId,answerId,"ID's EDIT ANSWER FUNV");
    const editedAnswer = quiz.questions
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
        // Update the state or perform any other actions upon successful update
        setIsEditingAnswer({
          ...isEditingAnswer,
          [questionId]: {
            ...isEditingAnswer[questionId],
            [answerId]: false,
          },
        });
  
        // Update your working data if needed
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
      } else {
        // Handle error cases
        console.error('Failed to update answer.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };
  


  const handleEditQuiz = async (quizId) => {
    console.log(quizId,"IN EDIT HANDLE Q");
    console.log(workingQuizData,"IN EDIT HANDLE Q");
    try {
      // Prepare the updated data. You should replace this with your actual data.
      const updatedData = {
        quizTitle: workingQuizData.quizTitle,
        //quizOutcome: workingQuizData.quizOutcome,
       // idealOutcome: workingQuizData.idealOutcome,
        // Add or update other fields as needed
      };
  
      // Send a PUT request to update the quiz data
      const response = await fetch(`/api/Quiz`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quizId, updatedData }),
      });
  
      if (!response.ok) {
        throw new Error(`Error updating quiz data: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Handle the response or update your state as needed
      console.log('Quiz data updated:', data);
      // Update your state with the edited quiz data
      setWorkingQuizData({ ...workingQuizData, ...updatedData });
      setIsEditingQuiz(false); // Exit edit mode
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error if needed
    }
  };
  

  const handleEditRecommendation = async (recommendationId) => {
    const editedRecommendation = quiz.outcomeRecommendations.find(
      (r) => r._id === recommendationId
    );
  
   
  
    try {
      const response = await fetch('/api/QuizRecommends', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recommendationId: recommendationId, // Include the recommendationId
      resultsMeaning: editedRecommendation.resultsMeaning, // Update with your new data
      tipsSummary: editedRecommendation.tipsSummary, // Update with your new data
      typeOfRecommendation: editedRecommendation.typeOfRecommendation,
        }),
      });
  
      if (response.ok) {
        // Update the state or perform any other actions upon successful update
        setIsEditingRecommendation({
          ...isEditingRecommendation,
          [recommendationId]: false,
        });
  
        // Update your working data if needed
        setWorkingQuizData({
          ...quiz,
          outcomeRecommendations: quiz.outcomeRecommendations.map((r) =>
            r._id === recommendationId ? editedRecommendation : r
          ),
        });
      } else {
        // Handle error cases
        console.error('Failed to update recommendation.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };
  



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Current Quiz (Admin View)</h1>

      <div key={quiz._id} className="border p-4 rounded-md shadow-md w-full">
      <button className="text-blue-500 hover:underline" onClick={toggleEditingQuiz}>
            {isEditingQuiz ? <SaveAsIcon
            onClick={
              () => {
              handleEditQuiz(quiz._id);
            }
          }
            /> : <EditIcon/>}
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

       {/* <p className="text-gray-500 mb-2">
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
          </p>*/}

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
                {isEditingQuestion[question._id] ? <SaveAsIcon
                onClick={
                  () => {
                  handleEditQuestion(question._id);
                }
              }
                /> : <EditIcon/>}
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
                          ? <SaveAsIcon
                            onClick={
                              () => {
                                handleEditAnswer(question._id,answer._id);
                              }
                            }
                          
                          />
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
                      ? <SaveAsIcon
                      onClick={
                        () => {
                          handleEditRecommendation(recommendation._id);
                        }
                      }
                      />
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






