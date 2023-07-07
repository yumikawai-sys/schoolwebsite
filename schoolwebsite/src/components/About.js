import React from "react";
import './common.css';

export default function About() {
  return (
    <div className="aboutall">
        <h2 className='aboutTitle'>SmartSchoolとは</h2>
        <h3 className='subTitle'>スクールの管理業務を一気にお任せ</h3>
        
        <div className="aboutContent">
            <img src='images/people.png' alt='students' style={{maxWidth:'28vw', padding:'20px'}}/> 
            <div className="aboutsubContent" style={{maxWidth:'45vw', padding:'20px', textAlign:'left'}}>
                <h3 className='h3Title' style={{textAlign:'left'}}>1. 愛されるスクールを目指して</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>講師様、生徒様、保護者様ためのアプリです</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>パソコンでも、スマートフォンでもお使いいただけます</p>
                <br/>
                <h3 className='h3Title' style={{textAlign:'left'}}>2. SmartSchoolは、2000年に誕生</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>進学塾、大学、高校、スポーツ教室など</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>数多くのスクール様を支えてきました</p>
                <br/>
                <h3 className='h3Title' style={{textAlign:'left'}}>3. 全面的にバックアップ</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>入出金管理、新しい生徒様の開拓など</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>スクール全般に関わる業務を一括管理できます</p>
                <br/>
                <h3 className='h3Title' style={{textAlign:'left'}}>4. 授業に専念できます！</h3>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>一番大切なのは、生徒様との時間</p>
                <p className='pTitle' style={{textAlign:'left', color:'black', paddingLeft:'10px'}}>その他の作業は、ぜんぶSmartSchoolにお任せください</p>
            </div>
        </div>
    </div>
  );
};