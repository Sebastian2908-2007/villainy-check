'use client'
import { useEffect,useState } from 'react';
import NewQuiz from '@/components/NewQuiz';
 import { getSingleQuiz,getSingleUser } from '@/utils/getData';
import { usePathname } from 'next/navigation';
import { useStoreContext } from '@/utils/GlobalState';
import { ADD_QUIZZER_DATA,ADD_QUIZRECS_DATA } from '@/utils/actions';

export default function TakeQuiz() {
    const [state, dispatch] = useStoreContext();
    const pathname = usePathname();
    const splitPath = pathname.split('/');
    const testerId = splitPath[4];
    const quizId = splitPath[2];
    const [quiz,setQuiz] = useState(null);
    useEffect(() => {
        async function getQuizzer() {
          const user = await getSingleUser(testerId);

            dispatch({
                type: ADD_QUIZZER_DATA,
                testSubject: user
             });

        };
        async function getTheQuiz() {
        if(!quiz) {
        const currentQuiz = await getSingleQuiz(quizId);
        dispatch({
            type: ADD_QUIZRECS_DATA,
            quizRecs: currentQuiz.outcomeRecommendations
         });
    
     
        setQuiz(currentQuiz);
   
        }
    };
    getQuizzer();
    getTheQuiz();
    },[dispatch,quiz,quizId,testerId]);
    return(
        quiz ?<NewQuiz items={quiz}/>:<button>Start Quiz</button>
    );
};