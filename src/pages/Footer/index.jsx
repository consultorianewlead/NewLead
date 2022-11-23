import React, { useState, useLayoutEffect } from 'react';
import FooterIcon from '../../assets/Footer.svg';
import { Contact, TitleContact, Button, Icon, Footer, Logo, DescriptionFooter, TitleFooter, Link } from './style';
import LogoIMG from '../../assets/Logo.svg';

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
    <div id='Footer'>

        <Contact style={{ width: "100%" }}>

            <div>
                <TitleContact>Conte com a Consultoria New Lead <br />
                no seu negócio.</TitleContact>
                <Button onClick={() => {props.setPopup(!props.popup)}} >Entrar em contato</Button>
            </div>

            <Icon style={{ width: width / 3}} src={FooterIcon} />

        </Contact>

        <Footer>

            <div>
                <Logo src={LogoIMG} />
                <DescriptionFooter>
                Informações da empresa:<br/>
                CNPJ: 34.062.439/0001-60<br/>
                Endereço: Rua Pio XII, Seabra Ba - 46900-000<br/>
                E-mail: contato@consultorianewlead.com.br<br/>
                Whatsapp: 75 9 9908 - 0292
                </DescriptionFooter>
            </div>

            <div style={{ display: "grid"}} >
                <TitleFooter>Contéudo</TitleFooter>
                <Link href="">Início</Link>
                <Link href="">Resultados</Link>
                <Link href="">O que é entregue?</Link>
                <Link href="">Como surgiu?</Link>
                <Link href="">Avaliações e empresas</Link>
                <Link href="">Sobre</Link>
            </div>

            <div style={{ display: "grid"}} >
                <TitleFooter>Redes sociais</TitleFooter>
                <Link href="">Instagram</Link>
                <Link href="">Whatsapp</Link>
                <Link href="">Facebook</Link>
                <Link href="">Linkedin</Link>
            </div>

        </Footer>

    </div>
  )
}

export default Index;