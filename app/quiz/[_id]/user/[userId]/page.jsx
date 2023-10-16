'use client'
import Carousel from '@/components/NewQuiz';
 
import { usePathname } from 'next/navigation'

export default function TakeQuiz() {
    const pathname = usePathname();
    const splitPath = pathname.split('/');
    const testerId = splitPath[4];
    const quizId = splitPath[2];
    console.log(splitPath);
    console.log(testerId,"userId");
    console.log(quizId,"QUIZ ID");
    return(
        <Carousel/>
    );
};