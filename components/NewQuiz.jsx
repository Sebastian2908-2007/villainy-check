'use client'
/*import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function NewQuiz(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
        autoPlay={false}
        next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
        prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default NewQuiz;*/

import React from 'react';
import Slider from 'react-slick';
import  { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuizSlide from './QuizSlide';
const NewQuiz = ({ items }) => {
    const sliderRef = useRef();
    const goToNextSlide = () => {
        sliderRef.current.slickNext();
        console.log('ref clicked');
      };
 const quizTitle = items.quizTitle;
    console.log(items);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=' w-[100vw] mt-[4rem] '>
        <h2 className="text-2xl text-center mb-16 text-[#f0e7e7] font-extrabold mb-2">{quizTitle}</h2>
    <Slider  ref={sliderRef} {...settings}>
      {items.questions.map((question, index) => (
        <QuizSlide
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

