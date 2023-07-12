import React from "react";
import ProgressSteps from "./ProgressSteps.js";

export default function Introduction() {
  return (
    <div>
            <h2 className='aboutTitle'>ご利用までの流れ</h2>
            <h3 className='subTitle'>専属担当がお客様に合った機能をひとつひとつご説明します</h3>
            <ProgressSteps />    
    </div>
  );
};