import React, { useEffect, useState } from "react";
import './common.css';

const sliderimages = [
  'images/teacherlarge.jpg',
  'images/flower.jpg',
  'images/swimming.jpg'
];

const Sliderchildhild = (props) => {
  const [imgsrc, setImgsrc] = useState('');
  
  const handleInputChange = (i) => {
    console.log('i', i);
    if (i===0)
      {props.handleValueChange(sliderimages[0])}
    else if (i===1)
      {props.handleValueChange(sliderimages[1])}
    else if (i===2)
      {props.handleValueChange(sliderimages[2])}
  };

  return (
    <>
      <div style={{display:'flex', justifyContent:'center', alignContent: 'center'}}>
        <input style={{marginRight:'40px'}} type="radio" id='first' className="radiobuttons" onClick={(e)=> {e.preventDefault(); handleInputChange(0)}}></input>
        <input style={{marginRight:'40px'}} type="radio" id='second' className="radiobuttons" onClick={(e)=> {e.preventDefault(); handleInputChange(1)}}></input>
        <input style={{marginRight:'40px'}} type="radio" id='third' className="radiobuttons" onClick={(e)=> {e.preventDefault(); handleInputChange(2)}}></input>
      </div>
    </>
  );
};

export default Sliderchildhild;


