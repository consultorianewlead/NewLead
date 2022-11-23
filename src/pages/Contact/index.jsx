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

  return (
    <Popup contentStyle={ width > 991 ? { width: width / 1.2, height: height / 1.2, borderRadius: "50px" } : {width: width / 1.2, borderRadius: "50px"}} position="center center" onClose={() => {props.setPopup(false)}} open={true} >
        <Container>
          <div>

            <Title>PREENCHA OS DADOS ABAIXO</Title>
            <Description>CERTIFIQUE-SE DAS INFORMAÇÕES PREENCHIDAS ANTES DO ENVIO</Description>

            <Form>

              <div style={{ display: "grid", justifyContent: "center" }}>
                <Text>Name</Text>
                <Input style={{ width: width / 5, height: height / 16 }} placeholder="Ex: João" />

                <Text>WhatsApp</Text>
                <Input style={{ width: width / 5, height: height / 16 }} placeholder="Ex: (12) 3 45678910" />

                <Text>E-mail</Text>
                <Input style={{ width: width / 5, height: height / 16 }} placeholder="Ex: joaopedro@gmail.com" />
              </div>
              
              <Nota>Nota: Ao preencher os dados eles serão enviados automaticamente para o nosso <br/>
              WhatsApp, e assim você poderá continuar com sua jornada pelo NewLead.</Nota>

              <div style={{ display: "flex", justifyContent: "center"}}><Button style={{ width: width / 5, height: height / 16 }} >Entrar em contato agora</Button></div>

            </Form>

          </div>
        </Container>
    </Popup>
  )
}

export default Index;