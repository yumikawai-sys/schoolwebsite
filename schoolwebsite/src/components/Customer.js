import React from "react";
import './common.css';

export default function Customer() {
  return (
    <>
        <div className="customerall">
            <h2 className='aboutTitle'>ご利用例</h2>
            <h3 className='subTitle'>導入事例とご利用までの流れ</h3>
        </div>
        
        <div classname='featuer1' style={{display:'flex'}}>
            <div className="featureContent" style={{margin:'20px'}}>
                <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                <p className="featureDesc">生徒管理</p>
                <ul>
                    <li>生徒個人情報</li>
                    <li>成績管理</li>
                    <li>連絡事項</li>
                </ul>
            </div>
            <div className="featureContent" style={{margin:'20px'}}>
                <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                <p className="featureDesc">講師管理</p>
                <ul>
                    <li>講師個人情報</li>
                    <li>契約事項</li>
                    <li>連絡事項</li>
                </ul>
            </div>
            <div className="featureContent" style={{margin:'20px'}}>
                <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                <p className="featureDesc">教室管理</p>
                <ul>
                    <li>教室カレンダー</li>
                    <li>契約事項</li>
                    <li>連絡事項</li>
                </ul>
            </div>
        </div>
        {/* 2nd line */}
        <div classname='featuer1' style={{display:'flex'}}>
            <div className="featureContent" style={{margin:'20px'}}>
                <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                <p className="featureDesc">入出金管理</p>
                <ul>
                    <li>入金情報</li>
                    <li>出金事項</li>
                    <li>その他経理事項</li>
                </ul>
            </div>
            <div className="featureContent" style={{margin:'20px'}}>
                <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                <p className="featureDesc">連絡管理</p>
                <ul>
                    <li>一斉送信情報</li>
                    <li>生徒・保護者連絡事項</li>
                    <li>講師連絡事項</li>
                </ul>
            </div>
            <div className="featureContent" style={{margin:'20px'}}>
                <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                <p className="featureDesc">入退室管理</p>
                <ul>
                    <li>生徒入退室情報</li>
                    <li>講師退室情報</li>
                </ul>
            </div>
        </div>
    </>
  );
};