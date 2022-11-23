import React, { useState, useLayoutEffect } from 'react';
import LogoIMG from '../../assets/LOGO.jpg';
import IconSVG from '../../assets/Icon-Home.svg';

import { Nav, Logo, Links, Link, Container, Title, Description, Button, Icon } from './style';

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

const { width, height } = useWindowDimensions();

  return (
    <div id='Home' style={{ height: "100vh" }}>

          <Nav>
              <Logo src={LogoIMG} alt="Logo New Lead" />

              <Links>
                  <Link href='#Results'>Resultados</Link>
                  <Link href='#Rating'>Avaliações</Link>
                  <Link href='#Founder'>Fundador</Link>
                  <Link href='#About'>Sobre</Link>
                  <Link href='#Benefits'>Entregue</Link>
              </Links>
        </Nav>

      <Container>
        
        <div>

          <Title>
          O <span style={{ color: "#1476C6"}}>vendedor</span> que trabalha <span>24 horas, 7 dias por <br/>
          semana e 365 dias no ano</span>, aumentando o<br/> 
          faturamento do seu negócio.
          </Title>

          <Description>
          O Google, Facebook e Instagram, são parceiros indispensáveis nos negócios. <br/><br/>
          São mais de 159 milhões de usuários navegando pela internet, comprando e<br/>
          consumindo diversos tipos de produtos/serviços.<br/><br/>

          <span> Invista em anúncios on-line e aumente o volume de vendas do seu negócio.</span>
          </Description>

          <Button onClick={() => {props.setPopup(!props.popup)}} style={{ width: width / 6, height: height / 14 }}  >Entrar em contato</Button>

        </div>

        <Icon style={{ width: width / 3, marginLeft: "-10%"}} src={IconSVG} />

      </Container>

    </div>
  )
}

export default Index;