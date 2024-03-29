import React from "react";
import './common.css';

export default function About() {
  return (
    <div className="aboutall">
        <h2 className='aboutTitle'>SmartSchoolとは</h2>
        <h3 className='subTitle'>スクールの管理業務をお任せください</h3>
        
        <div className="aboutContent">
            <img src='images/people.png' alt='students' style={{maxWidth:'28vw', padding:'20px'}}/> 
            <div className="aboutsubContent" style={{maxWidth:'45vw', padding:'20px', textAlign:'left'}}>
                <h3 className='h3Title' style={{textAlign:'left'}}>1. 愛されるスクールを目指して</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>一番大切なのは、生徒様との時間</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>その他の作業は、ぜんぶSmartSchoolにお任せください</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>スクール全般に関わる業務を一括管理できます</p>
                <br/>
                <h3 className='h3Title' style={{textAlign:'left'}}>2. SmartSchoolは、2000年に誕生</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>講師様、生徒様、保護者様ためのアプリです</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>パソコンでも、スマートフォンでも</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>どなたでも簡単にご利用いただけます</p>
                <br/>
                <h3 className='h3Title' style={{textAlign:'left'}}>3. 全面的にバックアップ</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>成績管理、保護者対応、講師の勤怠</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>入出金管理、新しい生徒様の開拓など</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>数多くのスクール様を支えています</p>
            </div>
        </div>
    </div>
  );
};