export const QuizSlide = ({question,goToNextSlide}) => {
    return(
        <div className="overflow-hidden bg-[#849b9f] flex flex-row w-[100vw] items-start">
        <div className="flex flex-col mt-0 max-w-[100%]">
          <div className="bg-[#f0e7e7] flex flex-col justify-center pr-8 h-16 shrink-0 items-end">
            <div className="bg-[#849b9f] flex flex-col items-center p-2">
              <div className="text-[1.1rem] font-['Inter'] font-bold text-[#fde1e2] mr-px">
                The Human Risk Project
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div className="bg-[#dbd5d5] w-16 shrink-0 h-[732px]" />
            <div className="self-end flex flex-col justify-between w-[calc(100vw-144px)]  h-[668px] items-center">
              <div className="flex flex-col gap-10 h-32 shrink-0 items-start">



             
        <div>
          <div className="min-h-screen p-4  ">
           
            <p className="text-[1rem] font-['Inter'] font-bold text-[#fde1e2]">{question.ques1}</p>
            <p className="text-[1rem] font-['Inter'] font-bold text-[#fde1e2]">{question.ques2}</p>
            {question.answers.map((answer,index) => (
                <p className="text-[1rem] font-['Inter'] font-bold text-[#fde1e2] ml-3" key={index}>{answer.answerTxt}</p>
            ))}
            
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
        <div className="bg-[#999595] w-20 shrink-0 h-[796px]" />
      </div>
    );
};
export default QuizSlide;

/*

    {items.questions.map((question, index) => (
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