import React, { useState } from "react";
import Sliderchild from "./Sliderchild.js";

const Sliderparent = () => {
  const [text, setText] = useState("images/teacherlarge.jpg");
  const handleValueChange = (newValue) => {
    console.log('newvalue', newValue);
    setText(newValue);    
  };

  return (
    <div>
      <div style={{display:'flex'}}> 
        <h2>あなたの笑顔が見たいから</h2>
        {/* <h3>スクール・塾の運営をITでサポート！</h3> */}
      </div>
      <img style={{width:'100%'}} src={text}/>
      <Sliderchild handleValueChange={handleValueChange} />
    </div>
  );
};

export default Sliderparent;


