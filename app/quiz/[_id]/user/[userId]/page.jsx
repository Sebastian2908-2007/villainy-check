'use client'
import { useEffect,useState } from 'react';
import NewQuiz from '@/components/NewQuiz';
 import { getSingleQuiz } from '@/utils/getData';
import { usePathname } from 'next/navigation'

export default function TakeQuiz() {
    const pathname = usePathname();
    const splitPath = pathname.split('/');
    const testerId = splitPath[4];
    const quizId = splitPath[2];
    const [quiz,setQuiz] = useState(null);
    useEffect(() => {
        async function getTheQuiz() {
        if(!quiz) {
        const currentQuiz = await getSingleQuiz(quizId);
        setQuiz(currentQuiz);
        }else{
            console.log('quiz already set');
        }
    }
    getTheQuiz();
    },[]);
 
    console.log(splitPath);
    console.log(testerId,"userId");
    console.log(quizId,"QUIZ ID");
    return(
        quiz ?<NewQuiz items={quiz}/>:<button>Start Quiz</button>
    );
};