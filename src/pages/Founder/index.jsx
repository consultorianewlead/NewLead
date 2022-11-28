import React, { useState, useLayoutEffect } from 'react';
import { Container, Photo, Title, Description } from './style';
import Fundador from '../../assets/Fundador.jpg';

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
    <Container id='Fouder'>
        <Photo style={{ width: width / 2.5}} src={Fundador} />
        <div style={{ display: "grid"}}>
            <Title>O fundador</Title>
            <Description>
            Meu nome é Enilton Martins, morador em uma das regiões mais incríveis da Chapada Diamantina - BA. Estou presente há mais
            de 3 anos no mercado, com formação em Gestão Comercial e atuando na área de Marketing Digital com especialidade na 
            Gestão de Tráfego.<br /><br />

            Durante esse período, tive diversas experiências em grandes organizações, como Sebrae, V4 Company, Vale
            Criativa, Sal Marketing e outros. Sendo o criador e gestor de
            diversas campanhas de marketing no mundo dos
            anúncios on-lines e com resultados que ultrapassaram
            os milhões de faturamento.<br /><br />

            Isso é um pouco da minha trajetória, que consigo contar aqui sobre os
            resultados alcançados, porém, o mais incrível de tudo isso, é saber
            que por causa das ideias, a dedicação e entrega que foram
            feitas, não teríamos esses resultados.
            </Description>
        </div>
    </Container>
  )
}

export default Index