import React, { useState, useLayoutEffect } from 'react';
import { Title, Button } from './style';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Primeira from '../../../assets/Prints/1M.png';
import Segunda from '../../../assets/Prints/2M.png';
import Terceira from '../../../assets/Prints/3M.png';
import Quarta from '../../../assets/Prints/4M.png';
import Quinta from '../../../assets/Prints/5M.png';
import Sexta from '../../../assets/Prints/6M.png';

const Index = ( props ) => {

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

  return (
    <div id='Results' style={{ padding: "20px" }}>
        <Title>São 5 anos no mercado e <span>mais de 250 empresas atendidas</span> em diversos nichos, mais de 7 dígitos (milhares)  gerenciados em anúncios on-lines e mais 7 dígitos (milhões) em <span>faturamentos gerados</span> aos nossos clientes.</Title>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "5%"}}>
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true} showStatus={false} >
          <div>
              <img src={Primeira} />
          </div>

          <div>
              <img src={Segunda} />
          </div>

          <div>
              <img src={Terceira} />
          </div>

          <div>
              <img src={Quarta} />
          </div>

          <div>
              <img src={Quinta} />
          </div>

          <div>
              <img src={Sexta} />
          </div>

          </Carousel>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => {props.setPopup(!props.popup)}}>Entrar em contato</Button>
        </div>
    </div>
  )
}

export default Index;