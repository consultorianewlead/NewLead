import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import { Nav, Logo, Box, Menu, Link, Title, Description, Button, Down, Icon } from './style';
import { AiOutlineArrowDown } from 'react-icons/ai';
import LogoIMG from '../../../assets/Logo.svg';

const Index = ( props ) => {

  const [ menu, setMenu ] = useState(false);

  return (
    <div id='Home' style={{ height: "100%", marginBottom: "10%" }}>

      {/* Nav */}

      {menu === true &&
      <Menu>
        <div>
          <Link style={{ fontSize: 40 }} href="#Results" onClick={() => setMenu(false)} >Resultados</Link>
          <Link style={{ fontSize: 40 }} href="#Rating" onClick={() => setMenu(false)} >Avaliações</Link>
          <Link style={{ fontSize: 40 }} href="#Founder" onClick={() => setMenu(false)} >Fundador</Link>
          <Link style={{ fontSize: 40 }} href="#Benefits" onClick={() => setMenu(false)} >Entregue</Link>
          <Link style={{ fontSize: 40 }} href="#About" onClick={() => setMenu(false)} >Sobre</Link>
        </div>
      </Menu>
      }

      <Nav>
        <Logo src={LogoIMG} />
        <Box style={menu === true ? {backgroundColor: "#fff"} : {}} onClick={() => setMenu(!menu)} >
          {menu === false ? <BiMenuAltRight/> : <MdClose style={menu === true ? {color: "#000"} : {}} />}
        </Box>
      </Nav>

      {/* Text */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>

          <Title>
          O <strong style={{ color: "#1476C6", fontWeight: "800" }}>vendedor</strong> que trabalha <br/>
          <span style={{ color: "#000", fontWeight: "800" }}>
          24 horas, 7 dias por semana e 365 dias no ano,
          </span> aumentando o faturamento do seu <span style={{ color: "#000", fontWeight: "800" }} >negócio.</span>
          </Title>

          <Description>
          O Google, Facebook e Instagram, são parceiros indispensáveis nos negócios.
          <br /> 
          <br /> 
          São mais de 159 milhões de usuários navegando pela internet, comprando e
          consumindo diversos tipos de produtos/serviços.
          <br /> 
          <br /> 
          Invista em anúncios on-line e aumente o volume de vendas do seu negócio.
          </Description>

         <div style={{ display: "flex", justifyContent: "center" }} >
          <Button onClick={() => {props.setPopup(!props.popup)}} >Entrar em contato</Button>
         </div>

         <Down><AiOutlineArrowDown /><p>Arraste para baixo</p></Down>

        </div>
      </div>

      </div>
  )
}

export default Index;