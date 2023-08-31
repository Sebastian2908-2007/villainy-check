import { questions } from "@/utils/questionData";
export default function Quiz () {
    console.log(questions)
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
               
                 className="mt-2 mb-2"
                 data-correct={answer.correct}
                 data-answertype={answer.answerType}
                 >
                    <span>{answer.answerType}</span>
                    <p className="text-center text-xs">
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
                className="mt-2 mb-2" 
                data-correct={answer.correct}
                data-answertype={answer.answerType}
                >
                    <span>{answer.answerType}</span>
                    <p className="text-center text-xs">
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