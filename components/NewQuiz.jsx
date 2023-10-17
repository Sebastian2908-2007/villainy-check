'use client'
import React from 'react';
import Slider from 'react-slick';
import  { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuizSlide from './QuizSlide';
import { between } from '@/utils/between';
const NewQuiz = ({ items }) => {
    let width  ;
    const sliderRef = useRef();
    const goToNextSlide = () => {
        sliderRef.current.slickNext();
        console.log('ref clicked');
      };
 const quizTitle = items.quizTitle;
    console.log(items);
  /*const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };*/
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
  console.log(centerMode);
  if(between(window.innerWidth,540,912)){
 width = '90%';
  }else if(between(window.innerWidth,912,1280)){
    width = '93%';
  }
  else if(between(window.innerWidth,1280,2500)){
    width = '95%';
  }
 
  console.log(width);
  return (
    <div className=' w-[100%] mt-[4rem] '>
        <h2 className="text-2xl text-center mb-16 text-[#849b9f] font-extrabold mb-2">{quizTitle}</h2>
    <Slider  ref={sliderRef} {...settings}>
      {items.questions.map((question, index) => (
        <QuizSlide
        
        width={width}
        question={question}
        goToNextSlide={goToNextSlide}
        key={index}/>
        
        
      ))}
    </Slider>
<div >hello</div>
   


  </div>
  );
};

export default NewQuiz;

/*


*/

