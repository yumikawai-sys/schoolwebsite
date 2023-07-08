import React from "react";
import './common.css';

export default function Customer() {
  return (
    <>
        <div className="customerall">
            <h2 className='aboutTitle'>ご利用例</h2>
            <h3 className='subTitle'>導入事例とご利用までの流れ</h3>
        
            {/* 1st line */}
            <div className='customer1' style={{display:'flex'}}>
                <div className="customerContent" style={{margin:'20px'}}>
                    <img src='images/cramschool.jpg' alt='slcramschoolide' style={{maxWidth: '100%'}}/>
                    <p className="customerDesc">進学塾</p>
                    <p className="customerDescdetail">生徒様の個人情報、教室管理をサポート</p>
                </div>
                <div className="customerContent" style={{margin:'20px'}}>
                    <img src='images/englishlesson.jpg' alt='englishlesson' style={{maxWidth: '100%'}}/>
                    <p className="customerDesc">英会話スクール</p>
                    <p className="customerDescdetail">講師管理や各種テストの管理はお任せ</p>
                </div>
                <div className="customerContent" style={{margin:'20px'}}>
                    <img src='images/swimminglesson.jpg' alt='swimminglesson' style={{maxWidth: '100%'}}/>
                    <p className="customerDesc">スイミングスクール</p>
                    <p className="customerDescdetail">保護者様との連絡やプロモーションに</p>
                </div>
            </div>
            {/* 2nd line */}
            <div className='customer1' style={{display:'flex'}}>
                <div className="customerContent" style={{margin:'20px'}}>
                    <img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%'}}/>
                    <p className="customerDesc">ヨガ教室</p>
                    <p className="customerDescdetail">生徒様への一斉連絡、経理処理が人気です</p>
                </div>
                <div className="customerContent" style={{margin:'20px'}}>
                    <img src='images/pclesson.jpg' alt='pclesson' style={{maxWidth: '100%'}}/>
                    <p className="customerDesc">資格取得スクール</p>
                    <p className="customerDescdetail">テストの予定や成績をラクラク管理</p>
                </div>
                <div className="customerContent" style={{margin:'20px'}}>
                    <img src='images/afterschool.jpg' alt='afterschool' style={{maxWidth: '100%'}}/>
                    <p className="customerDesc">学童・プリスクール</p>
                    <p className="customerDescdetail">入退室が分かって、保護者様も安心</p>
                </div>
            </div>

        </div>
            
    </>
  );
};