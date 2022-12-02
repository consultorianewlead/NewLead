import React, { useState, useLayoutEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Container, Title, Description, Form, Text, Input, Nota, Checkbox, Button } from './style';

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

  const [ name, setName ] = useState(undefined);
  const [ whatsapp, setWhatsapp ] = useState(undefined);
  const [ email, setEmail ] = useState(undefined);

  {/*`https://api.whatsapp.com/send?phone=5575999080292&text=Ol%C3%A1%20Enilton%2C%20meu%20nome%20%C3%A9%3A%20${name}%2C%20meu%20e-mail%20%C3%A9%3A${email}%20e%20meu%20telefone%20%C3%A9%3A${whatsapp}`*/}

  return (
    <Popup contentStyle={ width > 991 ? { width: width / 1.2, height: height / 1.2, borderRadius: "50px" } : {width: width / 1.2, borderRadius: "50px"}} position="center center" onClose={() => {props.setPopup(false)}} open={true} >
        <Container>
          <div>

            <Title>PREENCHA OS DADOS ABAIXO</Title>
            <Description>CERTIFIQUE-SE DAS INFORMAÇÕES PREENCHIDAS ANTES DO ENVIO</Description>

            <Form>

              <div style={{ display: "grid", justifyContent: "center" }}>
                <Text>Name</Text>
                <Input onChange={(e) => {setName(e.target.value)}} style={{ width: width / 5, height: height / 16 }} placeholder="Ex: João" />

                <Text>WhatsApp</Text>
                <Input onChange={(e) => {setWhatsapp(e.target.value)}} style={{ width: width / 5, height: height / 16 }} placeholder="Ex: (12) 3 45678910" />

                <Text>E-mail</Text>
                <Input onChange={(e) => {setEmail(e.target.value)}} style={{ width: width / 5, height: height / 16 }} placeholder="Ex: joaopedro@gmail.com" />
              </div>
              
              <Nota>Nota: Ao preencher os dados eles serão enviados automaticamente para o nosso <br/>
              WhatsApp, e assim você poderá continuar com sua jornada pelo NewLead.</Nota>

              <div style={{ display: "flex", justifyContent: "center"}}><Button style={{ width: width / 5, height: height / 16 }} href={`mailto:eniltonmartins14@gmail.com?subject=Contato%20New%20Lead&body=Nome%3A%20${name}%0D%0AWhatsApp%3A%20${whatsapp}%0D%0AE-mail%3A%20${email}%0D%0A%0D%0AOl%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.`} target="_blank" onClick={() => {props.setPopup(false)}} >Entrar em contato agora</Button></div>

            </Form>

          </div>
        </Container>
    </Popup>
  )
}

export default Index;