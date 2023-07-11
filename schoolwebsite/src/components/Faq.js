import React, { useState } from "react";

export default function Faq() {
  const [showAnswers1, setShowanswers1] = useState(false);
  const [showAnswers2, setShowanswers2] = useState(false);
  const [showAnswers3, setShowanswers3] = useState(false);
  const [showAnswers4, setShowanswers4] = useState(false);

  const showDetail1 = () => {
    setShowanswers1((current) => !current);
  };
  const showDetail2 = () => {
    setShowanswers2((current) => !current);
  };
  const showDetail3 = () => {
    setShowanswers3((current) => !current);
  };
  const showDetail4 = () => {
    setShowanswers4((current) => !current);
  };

  return (
    <div className="faqall">
      <h2 className='aboutTitle'>よくあるご質問</h2>
      <h3 className='subTitle'>よく頂くご質問の一例をご紹介します</h3>

      <div className='faqcontent' style={{marginTop: '20px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent: 'flex-start', marginLeft:'10%', marginRight:'10%'}}>
        <div className="questions">
            <div style={{display:'flex', justifyContent:'space-between', marginBottom: '10px', border:'8px solid white', borderRadius: '12px', padding:'10px'}}>
              <h2 style={{color:'#0081C9'}}>Q. 推奨環境を教えて下さい</h2>
              <h2 className="plusdetail" style={{color:'#0081C9'}}><a onClick={showDetail1}>+</a></h2>
            </div>
            {showAnswers1 && (
              <h3 style={{backgroundColor:'white', padding: '20px'}}>A. GoogleChrome 安定最新版をお勧めします</h3>
            )}
        </div>

        <div className="questions">
            <div style={{display:'flex', justifyContent:'space-between', marginBottom: '10px', border:'8px solid white', borderRadius: '12px', padding:'10px'}}>
              <h2 style={{color:'#0081C9'}}>Q. 機能を追加または解除することができますか？</h2>
              <h2 className="plusdetail" style={{color:'#0081C9'}}><a onClick={showDetail2}>+</a></h2>
            </div>
            {showAnswers2 && (
              <h3 style={{backgroundColor:'white', padding: '20px'}}>A. 導入後は、スクールの状況に合わせて機能を追加・解除できるので、無駄なコスト発生を防ぐことができます</h3>
            )}          
        </div>

        <div className="questions">
            <div style={{display:'flex', justifyContent:'space-between', marginBottom: '10px', border:'8px solid white', borderRadius: '12px', padding:'10px'}}>
              <h2 style={{color:'#0081C9'}}>Q. パソコンやスマホの操作が苦手です</h2>
              <h2 className="plusdetail" style={{color:'#0081C9'}}><a onClick={showDetail3}>+</a></h2>
            </div>
            {showAnswers3 && (
              <h3 style={{backgroundColor:'white', padding: '20px'}}>A. 管理画面からチャット形式でお問い合わせいただけます</h3>
            )}          
        </div>

        <div className="questions">
            <div style={{display:'flex', justifyContent:'space-between', marginBottom: '10px', border:'8px solid white', borderRadius: '12px', padding:'10px'}}>
              <h2 style={{color:'#0081C9'}}>Q. アルバイト講師も利用できますか？</h2>
              <h2 className="plusdetail" style={{color:'#0081C9'}}><a onClick={showDetail4}>+</a></h2>
            </div>            
            {showAnswers4 && (
              <h3 style={{backgroundColor:'white', padding: '20px'}}>A. 管理者としてご登録していただくことで、アルバイト講師の方もご利用いただけます</h3>
            )}          
        </div>
      </div>
    </div>
  );
};