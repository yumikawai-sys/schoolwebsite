import './App.css';
import Modal from "react-modal";
import React, { useRef, useState, useEffect } from "react";
import Topbar from "./components/Topbar.js";
import Menu from "./components/Menu.js";
import Main from "./components/Main.js";
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
  const FAQRef = useRef()
  const consultationRef = useRef()
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
      <Topbar />
      <Menu />
      <Sliderparent />
      <About />
      <Feature />
      <Customer />
      <Introduction />
      <Faq />
      <Contact />
      <Footer /> 
      
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
            <p>By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, 
            analyze site usage, and assist in our marketing efforts. <br/>
          
            <div>
              <div href="#CookiesArea" onClick={handleShowTerms}>Learn more</div>
            </div>
            </p> 
           
            <button onClick={modalShow}>Accept</button>
          </div>
        
          <div className="column-container">
            {showTerms && (
              <div id="CookiesArea">
                <div className="cookie-policy-wrapper">
                  <h2>Cookies policy</h2>
                  <br/>
                  <p>This Cookie Policy serves to inform you about the utilization of cookies, 
                    which are diminutive text files that are stored on your computer when you access specific web pages. </p>
                  
                  <p>However, we do employ encrypted data obtained from these cookies to enhance your browsing experience 
                    on our website. This includes leveraging the gathered information to identify and resolve errors, 
                    ultimately improving the overall usability of the site.</p>
                  <br/>
                  <p>We present you with this information as part of our ongoing commitment to comply with current 
                    legislation and to ensure utmost transparency regarding your privacy while using our website. </p>
                  
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
