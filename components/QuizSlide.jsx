'use client'
import { useState,useEffect } from "react";
export const QuizSlide = ({
    question,
    goToNextSlide,
    width,
    typeA,
    setTypeA,
    typeB,
    setTypeB,
    balanced,
    setBalanced,
    //correctType,
    //setCorrectType,
    hasSubmitted,
    setHasSubmitted
}) => {
 
    

      
    

    
    
  
    
    /*useEffect(() => {
        question.answers.forEach(answer => {
            if(answer.correct === 'true') {
                setCorrectType(answer.answerType);
                console.log(answer._id)
            }
        });
    },[]);*/
   /* const getCorrectAnswerType = (question) => {
        setHasSubmitted(true);
        question.answers.forEach(answer => {
            if(answer.correct === 'true') {
                //setCorrectType(answer.answerType);
                console.log(answer._id,'correct answer id');
            }
        });
    }*/


     const handleQuestionAnswer = (event,question) => {
        event.preventDefault();
      let correctType;

      question.answers.forEach(answer => {
        if(answer.correct === 'true') {
            //setCorrectType(answer.answerType);
            correctType = answer.answerType;
            console.log(answer._id,'correct answer id');
        }
    });

       console.log(event.target);
       setHasSubmitted(true);

       /**this will be our question.answer[].correct */
        const isUserCorrect = event.target.getAttribute('data-correct');
        const answerType = event.target.getAttribute('data-answertype');
        /**In the case of our data we will have this be our question.correctAnswer */
        //const correctType = question.correctType;
        console.log(isUserCorrect);
    console.log(answerType);
    console.log(correctType);

        if(isUserCorrect === 'true' && answerType === correctType) {
            setBalanced(balanced + 15);
            console.log('adding balanced');
            return;
        }else if(isUserCorrect === 'false' && correctType === 'far right') {
            console.log('FAR RIGHT ran');
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
        }else if (isUserCorrect === 'false' && correctType === 'far left') {
            console.log('FAR left ran');
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
        else if (isUserCorrect === 'false' && correctType === 'mid') {
            console.log('mid ran');
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
        <div className=" 
        
        bg-[#849b9f]
        flex flex-row
        
        items-start h-[100%] 
        min-[375px]:h-[auto]
        
        "
        style={{width:width}}
        >
        <div className="flex flex-col mt-0 max-w-[100%] h-[auto] min-[375px]:h-[auto]">
          <div className="bg-[#f0e7e7] flex flex-col justify-center pr-8 h-16 shrink-0 items-end">
            <div className="bg-[#849b9f] flex flex-col items-center min-[360px]:p-2">
              <div className="text-[1.1rem] font-['Inter'] font-bold text-[#fde1e2] mr-px">
                The Human Risk Project
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start h-[auto] min-[375px]:h-[auto]">

            <div className="bg-[#dbd5d5] w-16 shrink-0 h-[1761px] 
            min-[360px]:h-[1167px]
            min-[375px]:h-[1067px] 
            min-[540px]:h-[817px]
            min-[768px]:h-[748px]

            " />
            <div className="
            self-end
            flex flex-col justify-between w-[calc(100vw-144px)]  h-[auto] items-center ">

              <div className="
              flex
               flex-col
               gap-10
                shrink-0
               items-start
               w-full
               h-[auto]
               min-[360px]:h-[auto]
               
               ">



             
        <div className="w-full">
          <div className=" p-4  w-full">
           <div className="flex flex-col min-[540px]:flex-row w-full justify-between ">
            <p className="
            text-[1.1rem]
            text-center
             min-[540px]:text-[1.3rem]
             font-['Inter']
             font-bold
             text-[#fde1e2]
             min-[540px]:p-2
            ">1.&nbsp;{question.ques1}</p>
           {/* <span className="bg-[#fde1e2] text-[#849b9f] mt-8 mb-8 text-center font-extrabold rounded">VS</span>*/}
            <p className="
            text-[1.1rem]
            text-center
             min-[540px]:text-[1.3rem]
             font-['Inter']
             font-bold
             text-[#fde1e2]
             min-[540px]:p-2
            ">2.&nbsp;{question.ques2}</p>
            </div>
          

<ul className="text-[#fde1e2] list-none list-outside ">
  {question.answers.map((answer, index) => (
    <li className="
    bg-[#999595]
    text-[1rem] 
    font-['Inter']
    font-bold
    text-center
    mb-4
    p-2
    rounded rounded-full
    " 
    key={index}
    >
        <button
        disabled={hasSubmitted ? true:false}
         onClick={(event) => {
            //getCorrectAnswerType(question);
            handleQuestionAnswer(event,question)
        }}
         data-correct={answer.correct}
         data-answertype={answer.answerType}
        >
      {answer.answerTxt}
      </button>
    </li>
  ))}
</ul>


            
          </div>
        </div>
      






               
              </div>



              <div className="bg-[#bbb6b6] self-stretch flex flex-col justify-center h-24 shrink-0 items-center">
                <div className="bg-[#849b9f] flex flex-col items-start pb-1 px-8">
                  <button onClick={goToNextSlide} className="text-xl font-['Inter'] font-bold text-[#fde1e2] mr-1">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#999595] w-20 shrink-0 h-[1825px]
        min-[360px]:h-[1231px]
        min-[375px]:h-[1131px]
        min-[540px]:h-[881px]
        min-[768px]:h-[811px]
        
        " />
      </div>
    );
};
export default QuizSlide;

/*

    {items.questions.map((question, index) => ( h-[796px] left h-[732px]
        <div key={index}>
          <div className="min-h-screen p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{quizTitle}</h2>
            <p>{question.ques1}</p>
            <p>{question.ques2}</p>
            {question.answers.map((answer,index) => (
                <p key={index}>{answer.answerTxt}</p>
            ))}
            <button onClick={goToNextSlide}>Next Slide</button>
          </div>
        </div>
      ))}


*/