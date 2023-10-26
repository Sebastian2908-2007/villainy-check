'use client'
import React from 'react';
import Slider from 'react-slick';
import  { useRef,useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuizSlide from './QuizSlide';
import { between } from '@/utils/between';
import ErrorModal from './ErrorModal';

const NewQuiz = ({ items }) => {
    let width  ;
    const sliderRef = useRef();
    const [typeA,setTypeA] = useState(0);
    const [typeB,setTypeB] = useState(0);
    const [balanced,setBalanced] = useState(0);
   const [hasSubmitted,setHasSubmitted] = useState(false);
   const [error,setError] = useState(null);
   const [displayAnswers,setDisplayAnswers] = useState(null);
   const [slideCounter,setSlideCounter] = useState(items.questions.length);

   const handleReset = () => {
        setHasSubmitted(false);
        setDisplayAnswers({typeA:typeA,typeB:typeB,balanced:balanced});
        setSlideCounter(slideCounter - 1);
    
 };

 const closeModal = () => {
    setError(null);
  };

    const goToNextSlide = () => {
        if(!hasSubmitted) {
            setError('Please pick an answer!');
            return;
        }
        sliderRef.current.slickNext();
      
        handleReset();
        if(slideCounter === 1) {
          setDisplayAnswers({...displayAnswers,idealOutcome:items.idealOutcome});

        }
      };

 const quizTitle = items.quizTitle;
 

  
const centerMode = between(window.innerWidth,1281,1365);

  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    centerMode: centerMode,
    arrows: false,
  };

  if(between(window.innerWidth,540,912)){
 width = '90%';
  }else if(between(window.innerWidth,912,1280)){
    width = '93%';
  }
  else if(between(window.innerWidth,1280,2500)){
    width = '95%';
  }
 
 ;
  
  return (
    <div className=' w-[100%] mt-[4rem] '>
        <ErrorModal error={error} onClose={closeModal} />
        <h2 className="text-2xl text-center mb-16 text-[#849b9f] font-extrabold mb-2">{quizTitle}</h2>
    <Slider  ref={sliderRef} {...settings}>
      {items.questions.map((question, index) => (
        <QuizSlide
        width={width}
        question={question}
        goToNextSlide={goToNextSlide}
        typeA={typeA}
        setTypeA={setTypeA}
        typeB={typeB}
        setTypeB={setTypeB}
        balanced={balanced}
        setBalanced={setBalanced}
        //correctType={correctType}
        //setCorrectType={setCorrectType}
        hasSubmitted={hasSubmitted}
        setHasSubmitted={setHasSubmitted}
        slideCounter={slideCounter}
        setSlideCounter={setSlideCounter}
        displayAnswers={displayAnswers}
        setDisplayAnswers={setDisplayAnswers}
        key={index}/>
        
        
      ))}
    </Slider>

   


  </div>
  );
};

export default NewQuiz;

/*


*/

