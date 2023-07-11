import React from "react";

export default function Contact() {
  return (
    <div className="contactall" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2 className='aboutTitle'>お問合せ</h2>
        <h3 className='subTitle'>ご質問、資料請求はこちらのフォームからお願いします</h3>

        <form action="https://getform.io/f/4d24351f-4263-47b5-b0b8-07bbf659c15c" method="POST">
          <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'flex-start', width:'590px',
        marginTop:'40px', marginLeft:'10px'}}>
            <label for="name" style={{width:'100%', marginBottom:'10px'}}>お名前・スクール名</label>
            <input type="text" name="name" style={{width:'100%' , height:'40px', marginBottom:'20px'}}></input>

            <label for="email" style={{width:'100%', marginBottom:'10px'}}>メールアドレス</label>
            <input type="email" name="email" style={{width:'100%', height:'50px', marginBottom:'20px'}}></input>

            <label for="content" style={{width:'100%', marginBottom:'10px'}}>お問い合わせ内容</label>
            <input type="text" name="message" style={{width:'100%', height:'250px', marginBottom:'40px'}}></input>
            
          </div>
          <button type="submit" style={{width:'600px', height:'50px', marginLeft:'10px', backgroundColor:'#d5f5ef', 
          border:'rgb(203, 206, 206)'}}>送  信</button>
        </form>    
    </div>
  );
};