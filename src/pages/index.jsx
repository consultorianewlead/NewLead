import React, { useState, useLayoutEffect, useEffect } from 'react';

//Pages
import Popup from '../pages/Contact/index';
import Home from './Home/index';
import Results from './Results/index';
import Rating from './Rating/index';
import Founder from './Founder/index';
import About from './About/index';
import Benefits from './Benefits/index';
import Footer from './Footer/index';

//Mobile

import HomeM from './Mobile/index';

const Index = () => {
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
      useLayoutEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return windowDimensions;
    }

  const { width } = useWindowDimensions();

  const [ popup, setPopup ] = useState(false);

  return (
    <div>
      {width > 991 ? 
      
      <div>
        {popup === true && <Popup popup={popup} setPopup={setPopup} />}
        <Home popup={popup} setPopup={setPopup} />
        <Results popup={popup} setPopup={setPopup} />
        <Rating />
        <Founder />
        <About />
        <Benefits />
        <Footer popup={popup} setPopup={setPopup} />
      </div>

      :

      <div>
        {popup === true && <Popup popup={popup} setPopup={setPopup} />}
        <HomeM popup={popup} setPopup={setPopup} />
      </div>

      }
    </div>
  )
}

export default Index;