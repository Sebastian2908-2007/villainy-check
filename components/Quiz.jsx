
import { useState,useEffect } from "react";
import { questions } from "@/utils/questionData";
/**each question is worth a max of 10 points */
export default function Quiz ({setDisplayAnswers}) {
    const [typeA,setTypeA] = useState(0);
    const [typeB,setTypeB] = useState(0);
    const [balanced,setBalanced] = useState(0);
   const [hasSubmitted,setHasSubmitted] = useState(false);
    
    let potentialPoints;
    let potentialPointsCounter = 0;
    questions.forEach(question => {
       potentialPointsCounter = potentialPointsCounter + 15;
    });
    potentialPoints = potentialPointsCounter;

 const handleReset = () => {
    setDisplayAnswers(null);
    setTypeA(0);
    setTypeB(0);
    setBalanced(0);
    setHasSubmitted(false);
 };


useEffect(() => console.log(balanced),[balanced]);
 const handleQuestionAnswer = (event,question) => {
    event.preventDefault();
   console.log(event.target);
   /**this will be our question.answer[].correct */
    const isUserCorrect = event.target.getAttribute('data-correct');
    const answerType = event.target.getAttribute('data-answertype');
    /**In the case of our data we will have this be our question.correctAnswer */
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
            case'start right':
            setTypeB(typeB - 5);
            setTypeA(typeA + 5);
            setBalanced(balanced - 5);
            break;
            case'mid right':
            setTypeB(typeB - 10);
            setTypeA(typeA + 10);
            setBalanced(balanced - 10);
            break;
          }
    }else if (!isUserCorrect && correctType === 'far left') {
        switch(answerType) {
            case'start right':
            setTypeB(typeB - 5);
            setTypeA(typeA + 5);
            setBalanced(balanced - 5);
            break;
            case'mid right':
            setTypeB(typeB - 10);
            setTypeA(typeA + 10);
            setBalanced(balanced - 10);
            break;
            case'far right':
            setTypeB(typeB - 15);
            setTypeA(typeA + 15);
            setBalanced(balanced - 15);
            break;
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
          }      
    }
    else if (!isUserCorrect && correctType === 'mid') {
        switch(answerType) {
            case'start right':
            setTypeB(typeB - 5);
            setTypeA(typeA + 5);
            setBalanced(balanced - 5);
            break;
            case'mid right':
            setTypeB(typeB - 10);
            setTypeA(typeA + 10);
            setBalanced(balanced - 10);
            break;
            case'far right':
            setTypeB(typeB - 15);
            setTypeA(typeA + 15);
            setBalanced(balanced - 15);
            break;
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

 const handleSubmit = (event) => {
    event.preventDefault();
setDisplayAnswers({typeA:typeA,typeB:typeB,balanced:balanced});
setHasSubmitted(true);
console.log('handle submit ran');
return;
 };
    return(
        <>
    <form onSubmit={handleSubmit}>

       {questions ? questions.map(question => (
       
           <div className="flex flex-col h-[70vh]" key={question.ques1.text}>
            <div className="flex flex-col">
             <span className="text-center">Question &nbsp;{question.quesId}</span>
             <span className="text-center">Choose only one answer from one box!</span>
             </div>
        <div className="flex flex-row mb-11  justify-between items-center">
          <div className="border border-black w-[50%] h-[100%]">
            <div className="text-center text-xs pb-11">{question.ques1.text}</div>
        

          <div className="flex flex-col mb-11">
          {question.ques1.answers ? question.ques1.answers.map(answer => (
                
                <button
               id={question.quesId}
                key={Math.random()}
                 className="mt-2 mb-2 bg-orange-500 hover:bg-violet-600 text-center text-xs active:bg-violet-700"
                 onClick={(event) => handleQuestionAnswer(event,question)}
                 data-correct={answer.correct}
                 data-answertype={answer.answerType}
                 >
                   
                  
                 
                   
                    {answer.answerTxt}
                   
                </button>
        
            )):null}
         </div>
         </div>

          <span className="text-center">VS</span>

             <div className="border border-black w-[50%] h-[100%]">
         <div className="text-center text-xs pb-11">{question.ques2.text}</div>
         
          <div className="flex flex-col mb-11">
            {question.ques2.answers ? question.ques2.answers.map(answer => (
                
                <button
                id={question.quesId}
                key={Math.random()}
                className="mt-2 mb-2 bg-orange-500 hover:bg-violet-600 text-center text-xs active:bg-violet-700" 
                onClick={(event) => handleQuestionAnswer(event,question)}
                data-correct={answer.correct}
                data-answertype={answer.answerType}
                >
                    
                  
                        {answer.answerTxt}
                    
                </button>
            )):null}
         </div>
        </div>

        </div>
    

         </div>
        
        ))
        :
        null}
{hasSubmitted ?  null:<button type="submit" className="bg-red-700">Submit test</button>}
    </form>
    {hasSubmitted ? <button onClick={handleReset}  type="reset" className="bg-red-700">Reset</button>:null}
    </>
    );
};