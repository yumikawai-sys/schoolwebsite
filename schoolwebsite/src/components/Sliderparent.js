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
        
      </div>
      <div style={{ backgroundImage: `url(${text})`, width:'100%', height:'630px' }}>
        <div style={{paddingTop:'290px'}}></div>
        <h1 className="mainmessage" style={{color:'white', backgroundColor:'gray', opacity:'0.8', width: '22%', 
        marginLeft: '50px', padding: '5px', textAlign:'center'}}>スクール・塾の運営を<br />ITでサポート！</h1>
        
        <div style={{paddingTop:'160px'}}></div>
        <Sliderchild handleValueChange={handleValueChange} />
      </div>
    </div>
  );
};

export default Sliderparent;


