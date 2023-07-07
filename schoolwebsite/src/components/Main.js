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
                    <li className="content"><img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/girl.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/parent.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/swimming.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/exercize.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/girl.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/parent.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                    <li className="content"><img src='images/swimming.jpg' alt='slide' style={{maxWidth: '100%', maxHeight: '100%', width:'auto', height: 'auto'}}/></li>
                </ul>
                
            </div>
            
        </>
    );
};
