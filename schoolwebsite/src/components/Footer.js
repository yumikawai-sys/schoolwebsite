import React from "react";
import './common.css';

export default function Footer({about, feature, customer, introduction, faq, contact}) {
  const goTo = (reference) => {
    window.scrollTo({
      top: reference.current.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footerall">
        <div style={{ display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <img src="images/logo.png" alt="logo" style={{ height: '80px'}}/>
          <h2 style={{color:"white"}}>SmartSchool</h2>
        </div>
        <ul style={{ display: 'flex', listStyle:'none', alignItems:'center', justifyContent:'center'}}>
                <li style={{margin:'10px', color:'white'}} onClick={(e)=> {e.preventDefault(); goTo(about)}}>SmartSchoolとは</li>
                <li style={{margin:'10px', color:'white'}} onClick={(e)=> {e.preventDefault(); goTo(feature)}}>機能について</li>
                <li style={{margin:'10px', color:'white'}} onClick={(e)=> {e.preventDefault(); goTo(customer)}}>ご利用例</li>
                <li style={{margin:'10px', color:'white'}} onClick={(e)=> {e.preventDefault(); goTo(introduction)}}>ご利用までの流れ</li>
                <li style={{margin:'10px', color:'white'}} onClick={(e)=> {e.preventDefault(); goTo(faq)}}>よくあるご質問</li>
                <li style={{margin:'10px', color:'white'}} onClick={(e)=> {e.preventDefault(); goTo(contact)}}>お問合せ</li>
            </ul>
        <p style={{margin:'0', textAlign:'center', paddingBottom:'20px', color: 'rgb(203, 206, 206)'}}>© Copyright 2023, SmartSchool Technologies Inc. All Rights Reserved.</p>
      
    </div>
  );
};