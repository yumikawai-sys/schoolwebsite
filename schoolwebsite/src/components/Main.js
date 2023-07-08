import React, { useState, useEffect } from 'react';
import './common.css';

export default function Main() {

    return (
        <>
            <h2 className='mainTitle'>あなたの笑顔が見たいから</h2>
            <h3 className='subTitle'>スクール・塾の運営をITでサポート！</h3>
            <div className="wrap">
                <ul className='slideshow' style={{listStyle:'none'}}>
                    <li className="content"><img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/girl.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/parent.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/swimming.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/flower.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/maleteacher.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/smartphone.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/manwoman.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/girl.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/parent.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/swimming.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/flower.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/maleteacher.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/smartphone.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/manwoman.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/girl.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/parent.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/swimming.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/flower.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/maleteacher.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/smartphone.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/manwoman.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                </ul>
                
            </div>
            <div className='mainComment' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <h2 style={{color:'#f5b105', textAlign:'center', margin:'0', fontSize:'30px'}}>
                    SmartSchool</h2>
                <img src="images/logo.png" alt="logo" style={{ height: '50px'}}/>
                <h2 style={{color:'#f5b105', textAlign:'center', margin:'0', fontSize:'30px'}}>
                    は頑張るスクール経営者様の『あったらいいな』を形にしたアプリです</h2>
            </div>
        </>
    );
};
