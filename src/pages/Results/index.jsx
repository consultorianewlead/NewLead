import React, { useState, useLayoutEffect } from 'react';
import { Title, Button } from './style';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Imagens Carrosel
import Primeira from '../../assets/Prints/1.png';
import PrimeiraB from '../../assets/Prints/1b.png';

import Segunda from '../../assets/Prints/2.png';
import SegundaB from '../../assets/Prints/2b.png';

import Terceira from '../../assets/Prints/3.png';
import TerceiraB from '../../assets/Prints/3b.png';

import Quarta from '../../assets/Prints/4.png';
import QuartaB from '../../assets/Prints/4b.png';

import Quinta from '../../assets/Prints/5.png';
import QuintaB from '../../assets/Prints/5b.png';

import Sexta from '../../assets/Prints/6.png';

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

  return (
    <div id='Results'>

        <Title>
            Em <span>3 anos</span>, foram <span>mais 100 empresas atendidas</span> em diversos nichos, mais de 6 dígitos <br/>
            (milhares)  gerenciados em anúncios on-lines e mais 7 dígitos (milhões) em <span>faturamentos</span><br/>
            <span>gerados</span> aos nossos clientes.
        </Title>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }} >
            <div style={{ display: "grid", justifyContent: "center", width: "80%" }} >
                
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

                <div style={{ marginTop: "5%"}} >
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true} showStatus={false} >

                    <div>
                            <img src={PrimeiraB} />
                        </div>

                        <div>
                            <img src={SegundaB} />
                        </div>

                        <div>
                            <img src={TerceiraB} />
                        </div>

                        <div>
                            <img src={QuartaB} />
                        </div>

                        <div>
                            <img src={QuintaB} />
                        </div>

                </Carousel>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Index