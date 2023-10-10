'use client'
import { useState } from 'react';
import Quiz from '@/components/Quiz'
export default function Home() {
  const [displayAnswers,setDisplayAnswers] = useState(null);
  return (
    <div>
      <Quiz setDisplayAnswers={setDisplayAnswers}/>
      <div className=' flex flex-col'>
        <h2>Your Results</h2>
        <div className='flex flex-row'>
          <h3>TypeA villain score:</h3>
        <span>{displayAnswers ? displayAnswers.typeA:null}</span>
        </div>
        <div className='flex flex-row'>
          <h3>TypeB villain score:</h3>
        <span>{displayAnswers ? displayAnswers.typeB:null}</span>
        </div>
        <div className='flex flex-row'>
          <h3>your balance score:</h3>
        <span>{displayAnswers ? displayAnswers.balanced:null}</span>
        </div>
      </div>
    </div>
  )
}
