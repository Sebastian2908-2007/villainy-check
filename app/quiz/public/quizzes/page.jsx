'use client'
import { useEffect, useState } from 'react';
import QuizCard from '@/components/QuizCard';
import { fetchQuizzes } from '@/utils/getData';
//import AuthModal from '@/components/AuthModal';

export default function PublicQuizzes() {
  const [myQuizzes,setQuizzes] = useState(null);
  /*const [isOpen,setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };*/
  
  //useEffect(() => {
   async function setQuizData() {
   
const quizzes = await fetchQuizzes();
    setQuizzes(quizzes);
    console.log(quizzes)
   }
   if(myQuizzes === null) {setQuizData();};
  //},[]);
  

  return (
myQuizzes ?

<div>
{myQuizzes.map(quiz => (
<QuizCard key={quiz._id} quiz={quiz}/>
))}

</div>

:


<div>
<h2>QuicCard coming soon</h2>
</div>
  );


  
  
};

/*quizzes ? <div>
<h2>QuicCard coming soon</h2>
</div>:
quizzes.map(quiz => (
<QuizCard quiz={quiz}/>
))
)
}*/