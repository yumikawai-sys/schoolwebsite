import React from "react";
import ProgressSteps from "./ProgressSteps.js";

export default function Introduction() {
  return (
    <div>
        
            {/* 導入までの流れ */}
            <h2 className='aboutTitle'>ご利用までの流れ</h2>
            <h3 className='subTitle'>専属担当がお客様に合った機能をひとつひとつご説明します</h3>
            
                {/* Step1 お問合せ
                Step2 ご案内
                Step3 ご契約
                Step4 設定 & 本格稼働 */}

            <ProgressSteps />
    </div>
  );
};