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

const NewQuiz = ({ items }) => {
    const sliderRef = useRef();
    const goToNextSlide = () => {
        sliderRef.current.slickNext();
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
    <div className='min-h-screen'>
    <Slider  ref={sliderRef} {...settings}>
      {items.questions.map((item, index) => (
        <div key={index}>
          <div className="min-h-screen p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{quizTitle}</h2>
            
            <button onClick={goToNextSlide}>Next Slide</button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default NewQuiz;

