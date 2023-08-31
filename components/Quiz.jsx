
import { useState } from "react";
import { questions } from "@/utils/questionData";
/**each question is worth a max of 10 points */
export default function Quiz () {
    const [typeA,setTypeA] = useState(0);
    const [typeB,setTypeB] = useState(0);
    const [balanced,setBalanced] = useState(0);
    let potentialPoints;
    let potentialPointsCounter = 0;
    questions.forEach(question => {
       potentialPointsCounter = potentialPointsCounter + 15;
    });
    potentialPoints = potentialPointsCounter;
 console.log(potentialPoints);
 const handleQuestionAnswer = (event,question) => {
    event.preventDefault();
    console.log(event.target)
    const isUserCorrect = event.target.getAttribute('data-correct');
    const answerType = event.target.getAttribute('data-answertype');
    console.log(isUserCorrect);
    console.log(answerType);
    const correctType = question.correctType;
    if(isUserCorrect && answerType === correctType) {
        setBalanced(balanced + 15);
        return;
    }else if(!isUserCorrect && correctType === 'far right') {
          switch(answerType) {
            case'start left':
            setTypeB(typeB + 5);
            setTypeA(typeA - 5);
            setBalanced(balanced - 5);
            break;
            case'mid left':
            setTypeB(typeB + 10);
            setTypeA(typeA - 10);
            setBalanced(balanced - 10);
            break;
            case'far left':
            setTypeB(typeB + 15);
            setTypeA(typeA - 15);
            setBalanced(balanced - 15);
            break;
          }
    }

    

 };
    return(
    <form>

       {questions ? questions.map(question => (
           <div className="flex flex-col h-[70vh]" key={question.ques1.text}>
             <span>{question.correctType}</span>
        <div className="flex flex-row mb-11  justify-between items-center">
          <div className="border border-black w-[50%] h-[100%]">
            <div className="text-center text-xs">{question.ques1.text}</div>
        

          <div className="flex flex-col mb-11">
          {question.ques1.answers ? question.ques1.answers.map(answer => (
                
                <button
               
                key={Math.random()}
                 className="mt-2 mb-2"
                 
                 >
                    <span>{answer.answerType}</span>
                    <p 
                    onClick={(event) => handleQuestionAnswer(event,question)}
                    data-correct={answer.correct}
                    data-answertype={answer.answerType}
                    className="text-center text-xs">
                    {answer.answerTxt}
                    </p>
                </button>

            )):null}
         </div>
         </div>

          <span className="text-center">VS</span>

             <div className="border border-black w-[50%] h-[100%]">
         <div className="text-center text-xs">{question.ques2.text}</div>
         
          <div className="flex flex-col mb-11">
            {question.ques2.answers ? question.ques2.answers.map(answer => (
                
                <button
                
                key={Math.random()}
                className="mt-2 mb-2" 
                
                >
                    <span>{answer.answerType}</span>
                    <p 
                    onClick={(event) => handleQuestionAnswer(event,question)}
                    data-correct={answer.correct}
                    data-answertype={answer.answerType}
                    className="text-center text-xs">
                        {answer.answerTxt}
                    </p>
                </button>
            )):null}
         </div>
        </div>

        </div>
    

         </div>
        
        ))
        :
        null}

    </form>
    );
};