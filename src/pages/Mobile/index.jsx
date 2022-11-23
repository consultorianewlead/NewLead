import React from 'react';
import Home from './Home/index';
import Results from './Results/index';
import Rating from './Rating/index';
import Founder from './Founder/index';
import About from './About/index';
import Benefits from './Benefits/index';
import Footer from './Footer/index';

const Index = ( props ) => {
  return (
    <div>
        <Home popup={props.popup} setPopup={props.setPopup} />
        <Results />
        <Rating />
        <Founder />
        <About />
        <Benefits />
        <Footer popup={props.popup} setPopup={props.setPopup} />
    </div>
  )
}

export default Index;