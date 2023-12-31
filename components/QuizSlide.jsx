'use client'
import { useState } from "react";
import { sendQuizResults } from "@/utils/sendQuizResults";
import { useStoreContext } from '@/utils/GlobalState';
import { useRouter } from "next/navigation";

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
    setHasSubmitted,
    displayAnswers,
   // setDisplayAnswers,
    slideCounter,
   //setSlideCounter
}) => {
 const router = useRouter();
  const [state, dispatch] = useStoreContext(); 
const [lastTypeA,setLastTypeA] = useState({amount:0,add:false,subtract:false});
const [lastTypeB,setLastTypeB] = useState({amount:0,add:false,subtract:false});
const [lastBalanced,setLastBalanced] = useState({amount:0,add:false,subtract:false});
const [finishSubmitted,setFinishSubmitted] = useState(null);

      
    

    

    
   const handleUnselect = () => {
    if(lastBalanced.add) {
setBalanced(balanced - lastBalanced.amount);
    }else{
        setBalanced(balanced + lastBalanced.amount);
    };

    if(lastTypeA.add) {
setTypeA(typeA - lastTypeA.amount);
    }else{
        setTypeA(typeA + lastTypeA.amount);
    };

    if(lastTypeB.add) {
        setTypeB(typeB - lastTypeA.amount);
    }else{
        setTypeB(typeB + lastTypeA.amount);
    };
setLastBalanced({amount:0,add:false,subtract:false});
setLastTypeA({amount:0,add:false,subtract:false});
setLastTypeB({amount:0,add:false,subtract:false});
    setHasSubmitted(false);
   };


     const handleQuestionAnswer = (event,question) => {
        event.preventDefault();
      let correctType;

      question.answers.forEach(answer => {
        if(answer.correct === 'true') {
            //setCorrectType(answer.answerType);
            correctType = answer.answerType;
        }
    });

       setHasSubmitted(true);

       /**this will be our question.answer[].correct */
        const isUserCorrect = event.target.getAttribute('data-correct');
        const answerType = event.target.getAttribute('data-answertype');
        if(isUserCorrect === 'true' && answerType === correctType) {
            setBalanced(balanced + 15);
            setLastBalanced({...lastBalanced,amount: 15,add:true});
            return;
            /**added mid to equasion */
        }else if(isUserCorrect === 'false' && correctType === 'far right') {
              switch(answerType) {
                case'start left':
                setTypeB(typeB + 5);
               // setTypeA(typeA - 5);
               // setBalanced(balanced - 5);
                /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 5,add: true});
               // setLastTypeA({...lastTypeB,amount: 5,subtract: true});
                //setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
                case'mid left':
                setTypeB(typeB + 10);
                //setTypeA(typeA - 10);
                //setBalanced(balanced - 10);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 10,add: true});
                setLastTypeA({...lastTypeB,amount: 10,subtract: true});
                setLastBalanced({...lastBalanced,amount: 10, subtract:true});
                /**last action set ends*/
                break;
                case'far left':
                setTypeB(typeB + 15);
               // setTypeA(typeA - 15);
                //setBalanced(balanced - 15);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 15,add: true});
               // setLastTypeA({...lastTypeB,amount: 15,subtract: true});
               // setLastBalanced({...lastBalanced,amount: 15, subtract:true});
                /**last action set ends*/
                break;
                case'start right':
               // setTypeB(typeB - 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
               // setLastTypeB({...lastTypeB,amount: 5, subtract:true});
                setLastTypeA({...lastTypeA,amount: 5,add: true});
               // setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
                case'mid right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
                //setBalanced(balanced - 10);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 10, subtract:true});
                setLastTypeA({...lastTypeA,amount: 10,add: true});
                setLastBalanced({...lastBalanced,amount: 10, subtract:true});
                /**last action set ends*/
                break;

                case'mid':
                setTypeB(typeB + 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 5,add: true});
                setLastTypeA({...lastTypeA,amount: 5,add: true});
                //setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
              }
        }
        else if(isUserCorrect === 'false' && correctType === 'mid right') {
              switch(answerType) {
                case'start left':
                setTypeB(typeB + 5);
               // setTypeA(typeA - 5);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 5,add: true});
                setLastTypeA({...lastTypeB,amount: 5,subtract: true});
                setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
                case'mid left':
                setTypeB(typeB + 10);
               // setTypeA(typeA - 10);
               // setBalanced(balanced - 10);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 10,add: true});
                //setLastTypeA({...lastTypeB,amount: 10,subtract: true});
               // setLastBalanced({...lastBalanced,amount: 10, subtract:true});
                /**last action set ends*/
                break;
                case'far left':
                setTypeB(typeB + 15);
               // setTypeA(typeA - 15);
                //setBalanced(balanced - 15);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 15,add: true});
               // setLastTypeA({...lastTypeB,amount: 15,subtract: true});
               // setLastBalanced({...lastBalanced,amount: 15, subtract:true});
                /**last action set ends*/
                break;
                case'start right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
               // setLastTypeB({...lastTypeB,amount: 10, subtract:true});
                setLastTypeA({...lastTypeA,amount: 10,add: true});
               // setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
                case'far right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
               // setLastTypeB({...lastTypeB,amount: 10, subtract:true});
                setLastTypeA({...lastTypeA,amount: 10,add: true});
                //setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;

                case'mid':
                setTypeB(typeB + 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 5,add: true});
                setLastTypeA({...lastTypeA,amount: 5,add: true});
               // setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
              }
        }
        
        
        else if(isUserCorrect === 'false' && correctType === 'start right') {
              switch(answerType) {
                case'start left':
                setTypeB(typeB + 5);
               // setTypeA(typeA - 5);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 5,add: true});
                setLastTypeA({...lastTypeB,amount: 5,subtract: true});
                setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
                case'mid left':
                setTypeB(typeB + 10);
               // setTypeA(typeA - 10);
               // setBalanced(balanced - 10);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 10,add: true});
                setLastTypeA({...lastTypeB,amount: 10,subtract: true});
                setLastBalanced({...lastBalanced,amount: 10, subtract:true});
                /**last action set ends*/
                break;
                case'far left':
                setTypeB(typeB + 15);
               // setTypeA(typeA - 15);
               // setBalanced(balanced - 15);
                   /**Set State of last action*/
               // setLastTypeB({...lastTypeB,amount: 15,add: true});
                setLastTypeA({...lastTypeB,amount: 15,subtract: true});
               // setLastBalanced({...lastBalanced,amount: 15, subtract:true});
                /**last action set ends*/
                break;
                case'far right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 10);
                   /**Set State of last action*/
               // setLastTypeB({...lastTypeB,amount: 10, subtract:true});
                setLastTypeA({...lastTypeA,amount: 10,add: true});
               // setLastBalanced({...lastBalanced,amount: 10, subtract:true});
                /**last action set ends*/
                break;
                case'mid right':
                setTypeB(typeB - 5);
                setTypeA(typeA + 5);
                setBalanced(balanced - 5);
                   /**Set State of last action*/
               // setLastTypeB({...lastTypeB,amount: 5, subtract:true});
                setLastTypeA({...lastTypeA,amount: 5,add: true});
               // setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;

                case'mid':
                setTypeB(typeB + 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                   /**Set State of last action*/
                setLastTypeB({...lastTypeB,amount: 5,add: true});
                setLastTypeA({...lastTypeA,amount: 5,add: true});
               // setLastBalanced({...lastBalanced,amount: 5, subtract:true});
                /**last action set ends*/
                break;
              }
        }
        
        
        
        
        
        /*!!!!!!!!!!!!!!!**************NEED TO SETLAST BELOW********************************!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
        
        else if (isUserCorrect === 'false' && correctType === 'far left') {
            switch(answerType) {
                case'start right':
              //  setTypeB(typeB - 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                    /**Set State of last action*/
                  //  setLastTypeB({...lastTypeB,amount: 5, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 5,add: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
                case'mid right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                  //  setLastTypeB({...lastTypeB,amount: 10, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 10,add: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'far right':
               // setTypeB(typeB - 15);
                setTypeA(typeA + 15);
               // setBalanced(balanced - 15);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 15, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 15,add: true});
                   // setLastBalanced({...lastBalanced,amount: 15,subtract: true});
                    /**last action set ends*/
                break;
                case'start left':
                setTypeB(typeB + 5);
                //setTypeA(typeA - 5);
                //setBalanced(balanced - 5);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 5, add: true});
                   // setLastTypeA({...lastTypeA,amount: 5, subtract: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
                case'mid left':
                setTypeB(typeB + 10);
               // setTypeA(typeA - 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 10, add: true});
                  //  setLastTypeA({...lastTypeA,amount: 10, subtract: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;

                case'mid':
                setTypeB(typeB + 5);
                setTypeA(typeA + 5);
                //setBalanced(balanced - 5);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 5, add: true});
                    setLastTypeA({...lastTypeA,amount: 5,add: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
              }      
        }
        else if (isUserCorrect === 'false' && correctType === 'mid left') {
            switch(answerType) {
                case'start right':
               // setTypeB(typeB - 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                 /**Set State of last action*/
                  //  setLastTypeB({...lastTypeB,amount: 5, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 5,add: true});
                  //  setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
                case'mid right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 10, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 10,add: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'far right':
               // setTypeB(typeB - 15);
                setTypeA(typeA + 15);
               // setBalanced(balanced - 15);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 15, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 15,add: true});
                   // setLastBalanced({...lastBalanced,amount: 15,subtract: true});
                    /**last action set ends*/
                break;
                case'start left':
                setTypeB(typeB + 10);
               // setTypeA(typeA - 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 10, add: true});
                   // setLastTypeA({...lastTypeA,amount: 10, subtract: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'far left':
                setTypeB(typeB + 10);
               // setTypeA(typeA - 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 10, add: true});
                  //  setLastTypeA({...lastTypeA,amount: 10, subtract: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;

                case'mid':
                setTypeB(typeB + 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 5, add: true});
                    setLastTypeA({...lastTypeA,amount: 5,add: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
              }      
        }
        else if (isUserCorrect === 'false' && correctType === 'start left') {
            switch(answerType) {
                case'start right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 10, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 10,add: true});
                  //  setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'mid right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                  //  setLastTypeB({...lastTypeB,amount: 10, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 10,add: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'far right':
               // setTypeB(typeB - 15);
                setTypeA(typeA + 15);
                //setBalanced(balanced - 15);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 15, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 15,add: true});
                   // setLastBalanced({...lastBalanced,amount: 15,subtract: true});
                    /**last action set ends*/
                break;
                case'start left':
                setTypeB(typeB + 5);
               // setTypeA(typeA - 5);
               // setBalanced(balanced - 5);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 5, add: true});
                   // setLastTypeA({...lastTypeA,amount: 5, subtract: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
                case'mid left':
                setTypeB(typeB + 10);
               // setTypeA(typeA - 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 10, add: true});
                   // setLastTypeA({...lastTypeA,amount: 10, subtract: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;

                case'mid':
                setTypeB(typeB + 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 5, add: true});
                    setLastTypeA({...lastTypeA,amount: 5,add: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
              }      
        }


        else if (isUserCorrect === 'false' && correctType === 'mid') {
            switch(answerType) {
                case'start right':
                //setTypeB(typeB - 5);
                setTypeA(typeA + 5);
               // setBalanced(balanced - 5);
                 /**Set State of last action*/
                  //  setLastTypeB({...lastTypeB,amount: 5, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 5,add: true});
                   // setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
                case'mid right':
               // setTypeB(typeB - 10);
                setTypeA(typeA + 10);
               // setBalanced(balanced - 10);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 10, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 10,add: true});
                   // setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'far right':
              //  setTypeB(typeB - 15);
                setTypeA(typeA + 15);
               // setBalanced(balanced - 15);
                 /**Set State of last action*/
                   // setLastTypeB({...lastTypeB,amount: 15, subtract: true});
                    setLastTypeA({...lastTypeA,amount: 15,add: true});
                   // setLastBalanced({...lastBalanced,amount: 15,subtract: true});
                    /**last action set ends*/
                break;
                case'start left':
                setTypeB(typeB + 5);
                //setTypeA(typeA - 5);
                //setBalanced(balanced - 5);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 5, add: true});
                    //setLastTypeA({...lastTypeA,amount: 5, subtract: true});
                    //setLastBalanced({...lastBalanced,amount: 5,subtract: true});
                    /**last action set ends*/
                break;
                case'mid left':
                setTypeB(typeB + 10);
                //setTypeA(typeA - 10);
                //setBalanced(balanced - 10);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 10, add: true});
                    //setLastTypeA({...lastTypeA,amount: 10, subtract: true});
                    //setLastBalanced({...lastBalanced,amount: 10,subtract: true});
                    /**last action set ends*/
                break;
                case'far left':
                setTypeB(typeB + 15);
                //setTypeA(typeA - 15);
                //setBalanced(balanced - 15);
                 /**Set State of last action*/
                    setLastTypeB({...lastTypeB,amount: 15, add: true});
                    //setLastTypeA({...lastTypeA,amount: 15, subtract: true});
                    //setLastBalanced({...lastBalanced,amount: 15,subtract: true});
                    /**last action set ends*/
                break;
               
              }      
        }
        /**ADD NEWER ELSE IF AND CASES BELOW */
     };
    

    return(
        slideCounter >= 1 ?
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

            <div className="
            bg-[#dbd5d5]
            w-16 shrink-0
            h-[1571px] 
            min-[360px]:h-[1007px]
            min-[375px]:h-[947px] 
            min-[430px]:h-[870px]
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


{hasSubmitted ? <button
 className="
 bg-[#999595]
 text-[1rem] 
 text-white 
 font-['Inter']
 font-extrabold
 text-center
 m-auto
 mb-64
 p-2
 rounded rounded-full
 " 
onClick={() => handleUnselect()}>Unselect</button>

          :
             
        <div className="w-full">
          <div className=" p-4  w-full">
            
           <div className="flex flex-col min-[540px]:flex-row w-full justify-between mb-8">
            <p className="
            text-[1.1rem]
            text-center
             min-[540px]:text-[1.3rem]
             font-['Inter']
             font-bold
             text-[#fde1e2]
             min-[540px]:p-2
             mb-2
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
             mb-2
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
        </div>}
      






               
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

        <div className="
        bg-[#999595] w-20 
        shrink-0 
        h-[1635px]
        min-[360px]:h-[1071px]
        min-[375px]:h-[1011px]
        min-[430px]:h-[934px]
        min-[540px]:h-[881px]
        min-[768px]:h-[811px]
        
        " >
          </div>
          
      </div>:
      <div className="flex flec-col justify-center bg-[#bbb6b6] p-4">
       {/* <span className="text-[#fde1e2]">Quiz Complete!</span>
        <span className="text-[#fde1e2]">Check out your scores</span>
        <span className="text-[#fde1e2]">Type A Score {displayAnswers.typeA}</span>
        <span className="text-[#fde1e2]">Type B Score {displayAnswers.typeB}</span>
      <span className="text-[#fde1e2]">Type Balanced Score {displayAnswers.balanced}</span>*/}
      {finishSubmitted ? 
            <button type="button" className="bg-[#849b9f] font-bold p-2 text-[#fde1e2]  border-2 border-[#fde1e2] rounded " disabled>
            <svg className="animate-spin h-5 w-full  text-[#fde1e2] fill-current" viewBox="0 0 66 66">
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>
              </svg>
 
            
            ...Finishing up
            </button>
            
            :

        <button 
        // className="p-2 border-2 border-[#fde1e2] text-xl font-['Inter'] font-bold bg-[#849b9f] text-[#fde1e2] mr-1"
        className='animate-bounce p-2 border-2 border-[#fde1e2] text-xl  font-bold bg-[#849b9f] text-[#fde1e2] mr-1'
         onClick={ async () => {
          setFinishSubmitted(true);
        const successful = await sendQuizResults(displayAnswers,state.quizRecs,state.testSubject);
         
        if(successful === true) {
           setFinishSubmitted(false);
           router.push('/login');
        };
         }}>
          Finish
        </button>
                 }
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