import React from "react";
import './common.css';

export default function Footer() {
  return (
    <div className="footerall">
        <div style={{ display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <img src="images/logo.png" alt="logo" style={{ height: '80px'}}/>
          <h2 style={{color:"white"}}>SmartSchool</h2>
        </div>
        <ul style={{ display: 'flex', listStyle:'none', alignItems:'center', justifyContent:'center'}}>
                <li style={{margin:'10px', color:'white'}}>SmartSchoolとは</li>
                <li style={{margin:'10px', color:'white'}}>機能について</li>
                <li style={{margin:'10px', color:'white'}}>ご利用例</li>
                <li style={{margin:'10px', color:'white'}}>ご利用までの流れ</li>
                <li style={{margin:'10px', color:'white'}}>よくあるご質問</li>
                <li style={{margin:'10px', color:'white'}}>お問合せ</li>
            </ul>
        <p style={{margin:'0', textAlign:'center', paddingBottom:'20px'}}>© Copyright 2023, SAFE HARBOUR Research & Technologies Corp. All Rights Reserved.</p>
      
    </div>
  );
};