'use client'
import { useEffect, useState } from 'react';
import QuizCard from '@/components/QuizCard';
import { fetchQuizzes } from '@/utils/getData';
export default function TakeFreeQuiz() {
  const [quizzes,setQuizzes] = useState(null);
  useEffect(() => {
const quizzes = fetchQuizzes();
    setQuizzes(quizzes);
  },[quizzes]);
  return (
   quizzes ? <div>
        <h2>QuicCard coming soon</h2>
    </div>:
    quizzes.map(quiz => (
    <QuizCard quiz={quiz}/>
    ))
  )
}