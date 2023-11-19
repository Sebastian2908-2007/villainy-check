'use client'
import { useEffect, useState } from 'react';
import QuizCard from '@/components/QuizCard';
import { fetchQuizzes } from '@/utils/getData';
import Image from 'next/image';
//import AuthModal from '@/components/AuthModal';

export default function PublicQuizzes() {
  const [myQuizzes,setQuizzes] = useState(null);
 
  
  //useEffect(() => { great example for other non nec useEffects
   async function setQuizData() {
   
const quizzes = await fetchQuizzes();
    setQuizzes(quizzes);
   }
   if(myQuizzes === null) {setQuizData();};
  //},[]);
  

  return (
    <>
    <section className="
            w-full 
            h-[50vh] 
            min-[540px]:h-[60vh] 
            min-[1024px]:h-[90vh]
            relative
            "
            >
                <Image
               fill={true}
                src='/quizzes-hero.jpg'
                alt="old measuring tools with text overlay"
                />
            </section>
  
    

    
{myQuizzes ?

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
{myQuizzes.map(quiz => (
<QuizCard key={quiz._id} quiz={quiz}/>
))}

</div>

:


<div>
<h2>QuicCard coming soon</h2>
</div>}
</>
  );


  
  
};

