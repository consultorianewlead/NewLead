import React from 'react';
import { Container, Title, Button, Icon, Footer, Logo, Description, BackToTop } from './style';
import IconIMG from '../../../assets/Footer.svg';
import LogoIMG from '../../../assets/LOGO.jpg'

const Index = ( props ) => {
  return (
    <div id='Footer'>

        <Container>
            <Title>Conte com a Consultoria <span>New Lead</span> no seu negócio.</Title>
            <div style={{ display: "flex", justifyContent: "center" }}><Button onClick={() => {props.setPopup(!props.popup)}} >Entrar em contato</Button></div>
            <Icon src={IconIMG} />
        </Container>

        <Footer>
            <Logo src={LogoIMG} />
            <Description>
            Informações da empresa:
            CNPJ: 34.062.439/0001-60
            Endereço: Rua Pio XII, Seabra Ba - 46900-000
            E-mail: contato@consultorianewlead.com.br
            Whatsapp: 75 9 9908 - 0292
            </Description>
            <BackToTop href="#Home">Voltar ao topo</BackToTop>
        </Footer>

    </div>
  )
}

export default Index;