import React from "react";
import { useState, useEffect } from "react";
import Slider from "./Slider.js"
import './common.css';

export default function MainSlider() {
    // const [countval, setCountVal] = useState(initialState);
    const [text, setText] = useState(0);

    const countval = (newValue) => {
      console.log(text);
      setText(newValue);
    }
  return (
   <>
      <div style={{top: '100px', display:'flex'}}> 
        <h2>あなたの笑顔が見たいから</h2>
        <h3>スクール・塾の運営をITでサポート！</h3>
      </div>
     <div className="mainslider">
       <Slider countval={countval} />
    </div>
   </>
  );
};
