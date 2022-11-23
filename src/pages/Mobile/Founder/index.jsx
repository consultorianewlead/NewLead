import React, { useState, useLayoutEffect } from 'react';
import { Image, Box, Title, Description } from './style';
import Fundador from '../../../assets/Fundador.jpg';

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
    <div id='Founder' style={{ display: "flex", justifyContent: "center" }} >
        <div style={{ display: "grid", justifyContent: "center" }}>
            <Image style={{ width: width / 1.1 }} src={Fundador} />
            <Box style={{ width: width / 1.1 }} >
                <Title>O fundador</Title>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Description>
                    Meu nome é Enilton Martins, morador nas regiões mais incríveis da Chapada Diamantina. Estou presente a mais de 3 anos no mercado, com formação em Gestão Comercial e atuando na área de Marketing Digital.
                    <br /><br />
                    Durante esse período, tive como experiência a atuação em organizações, sendo Sebrae, V4 Company, Vale Criativa, Sal Marketing e<br /> outros. Criador e gestor de diversas campanhas de marketing no mundo dos anúncios on-lines e com resultados que ultrapassaram os milhões de faturamento.
                    <br /><br />
                    Isso é um pouco que consigo contar aqui<br /> sobre os nossos resultados, porém, o mais incrível de tudo isso, é saber que por causa <br />das ideias, a dedicação e entrega que foi feita, não teríamos nenhum desses resultados e eu não poderia estar dividindo contigo aqui.
                    </Description>
                </div>
            </Box>
        </div>
    </div>
  )
}

export default Index