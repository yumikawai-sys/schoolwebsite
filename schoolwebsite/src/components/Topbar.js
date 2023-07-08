import React from "react";
import './topbar.css';
// import Logo from "../logo.png";

export default function Topbar() {
  return (
    
        <div className="topmenu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        
            {/* icon */}
            <div className="logoimage" style={{marginLeft:'10px'}}>
                <img src="images/logo.png" alt="logo" style={{ height: '20vh'}}/>
            </div>
            {/* menu items */}
            <ul style={{ display: 'flex', listStyle:'none'}}>
                <li style={{margin:'20px'}}>SmartSchoolとは</li>
                <li style={{margin:'20px'}}>機能について</li>
                <li style={{margin:'20px'}}>ご利用例</li>
                <li style={{margin:'20px'}}>ご利用までの流れ</li>
                <li style={{margin:'20px'}}>よくあるご質問</li>
                <li style={{margin:'20px'}}>お問合せ</li>
            </ul>
            {/* button */}
            <button style={{marginRight:'20px', backgroundColor:'#f5b105', height:'40px', width:'140px', borderRadius:'8px',
            borderColor:'#FFC93C', color:'white', fontSize:'18px'}}>資料請求</button>
        </div>
    
  );
};

