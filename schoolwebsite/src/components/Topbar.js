import React from "react";
import './topbar.css';

export default function Topbar({about, feature, customer, introduction, faq, contact}) {

    const goTo = (reference) => {
        window.scrollTo({
          top: reference.current.offsetTop - 50,
          behavior: 'smooth',
        });
      };

      
  return (
    
        <div className="topmenu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        
            {/* icon */}
            <div className="logoimage" style={{marginLeft:'10px'}}>
                <img src="images/logo.png" alt="logo" style={{ height: '20vh'}}/>
            </div>
            {/* menu items */}
            <ul style={{ display: 'flex', listStyle:'none'}}>
                <li style={{margin:'20px'}} onClick={(e)=> {e.preventDefault(); goTo(about)}}>SmartSchoolとは</li>
                <li style={{margin:'20px'}} onClick={(e)=> {e.preventDefault(); goTo(feature)}}>機能について</li>
                <li style={{margin:'20px'}} onClick={(e)=> {e.preventDefault(); goTo(customer)}}>ご利用例</li>
                <li style={{margin:'20px'}} onClick={(e)=> {e.preventDefault(); goTo(introduction)}}>ご利用までの流れ</li>
                <li style={{margin:'20px'}} onClick={(e)=> {e.preventDefault(); goTo(faq)}}>よくあるご質問</li>
                <li style={{margin:'20px'}} onClick={(e)=> {e.preventDefault(); goTo(contact)}}>お問合せ</li>
            </ul>
            {/* button */}
            <button style={{marginRight:'20px', backgroundColor:'#f5b105', height:'40px', width:'140px', borderRadius:'8px',
            borderColor:'#FFC93C', color:'white', fontSize:'18px'}} onClick={(e)=> {e.preventDefault(); goTo(contact)}}>資料請求</button>
        </div>
    
  );
};

