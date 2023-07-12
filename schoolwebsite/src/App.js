import './App.css';
import Modal from "react-modal";
import React, { useRef, useState, useEffect } from "react";
import Topbar from "./components/Topbar.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Feature from "./components/Feature.js";
import Customer from "./components/Customer.js";
import Introduction from "./components/Introduction.js";
import Faq from "./components/Faq.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Sliderparent from './components/Sliderparent.js'

Modal.setAppElement("#root");

function App() {
  const aboutRef = useRef()
  const featureRef = useRef()
  const customerRef = useRef()
  const introductionRef = useRef()
  const faqRef = useRef()
  const contactRef = useRef()

  const [modalIsOpen, setIsOpen] = React.useState(true);
  let [posts, setPosts] = useState(false);

  useEffect(() => {

    //this is for cookies
    const hasAgreed = localStorage.getItem('cookiePolicyAgreed');

    if (hasAgreed==='true') {
      setIsOpen(false);
    }
    console.log('hasAgreed', hasAgreed);
    console.log('modalIsOpen', modalIsOpen);

  }, []);

  const [showTerms, setShowTerms] = useState(false);
  const handleShowTerms = () => {
    setShowTerms((current) => !current);
  };

  const modalShow = () => {
    setIsOpen(false);
    localStorage.setItem('cookiePolicyAgreed', 'true'); //2nd parameter should be a string
  };


  return (
    <div className="App">
      <Topbar about={aboutRef} feature={featureRef} customer={customerRef} introduction={introductionRef} 
      faq={faqRef} contact={contactRef}/>
      <Menu />
      <Sliderparent />

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={featureRef}>
        <Feature />
      </section>

      <section ref={customerRef}>
        <Customer />
      </section>

      <section ref={introductionRef}>
        <Introduction />
      </section>

      <section ref={faqRef}>
        <Faq />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>

      <Footer about={aboutRef} feature={featureRef} customer={customerRef} introduction={introductionRef} 
      faq={faqRef} contact={contactRef}/> 
      
      {modalIsOpen && (
      <Modal
        isOpen={modalIsOpen}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before"
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before"
        }}
        closeTimeoutMS={500}
      >
      <div className="cookies">
        <div className="cookies-content">
          <div className="row-container">
            <p>当ウェブサイトでは、お客様により良いサービスを提供するため、クッキーを利用しています。
                  クッキーの使用に同意いただける場合は「同意」ボタンをクリックし、<br />
                  クッキーポリシーについては「詳細を見る」ボタンをクリックしてください。  <br/>
            
            <div style={{display:'flex', justifyContent:'space-between', paddingRight:'50px'}}>
              <div href="#CookiesArea" onClick={handleShowTerms} ><a href='#cookiecontent'>詳細を見る</a></div>
              <button onClick={modalShow} >同 意</button>
            </div>
            </p> 
          </div>
        
          <div className="column-container" id='cookiecontent'>
            {showTerms && (
              <div id="CookiesArea">
                <div className="cookie-policy-wrapper">
                  <h2>クッキーポリシー</h2>
                  <br/>
                  <p>当社では、クッキーを使用して収集した情報を利用して、お客様のウェブサイトの利用状況（アクセス状況、トラフィック、ルーティング等）を分析し、
                    ウェブサイト自体のパフォーマンス改善や、当社からお客様に提供するサービスの向上、改善のために使用することがあります。</p>
                  
                  <p>この他、クッキーは、提携する広告配信サービス提供会社における行動ターゲティング広告の配信に使用される場合があります。</p>
                  {/* <br/>
                  <p>We present you with this information as part of our ongoing commitment to comply with current 
                    legislation and to ensure utmost transparency regarding your privacy while using our website. </p> */}
                    
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </Modal>)}
    </div>
  );
}

export default App;
