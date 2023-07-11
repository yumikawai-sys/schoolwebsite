import React, {useEffect, useState} from "react";
import './slider.css';

const sliderimages = [
  'images/exercize.jpg',
  'images/girl.jpg',
  'images/parent.jpg',
  'images/swimming.jpg'
];
let i = 0;

export default function Slider(props) {

  const [images, setImages] = useState(sliderimages[i]);  
  
  function imageshow() {
    setInterval(() => {
      if (i===4)
        {props.countval(0)}
      else
        {props.countval(countval + 1)}
    }, 10000);
  }

  return (
    <div>
        <div class="slider">
        <div class="slides">
          
          <div class="slide">
            <img src={images} alt="" onLoad={imageshow}/>
          </div>
          
        </div>
      
      </div>
    </div>

  );
};