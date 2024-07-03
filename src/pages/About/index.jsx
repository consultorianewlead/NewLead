import React, { useState, useLayoutEffect } from 'react';
import { Container, Photo, Title, Description } from './style';
import About from '../../assets/About.svg';

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
    <Container id='About'>
        <Photo style={{ width: width / 2.5}} src={About} />
        <div style={{ display: "grid" }}>
            <Title>Sobre a New Lead</Title>
            <Description>
                A Consultoria New Lead surgiu com a proposta<br/>
                de unir as estratégias e processos que foram<br/>
                usados na criação e gerenciamento de mais 250 atendidas<br/>
                empresas, empresas essas que ultrapassaram<br/>
                os 7 dígitos(milhões) de faturamento em nossos<br/>
                resultados. Além disso, está a união de <br/>
                profissionais que buscam incansavelmente O<br/>
                Novo e dividem ambições na vida.
            </Description>
        </div>
    </Container>
  )
}

export default Index