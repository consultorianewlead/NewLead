import React, { useState, useLayoutEffect, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  Container,
  Title,
  Description,
  Form,
  Text,
  Input,
  Nota,
  Checkbox,
  Button,
} from "./style";
import emailjs from "@emailjs/browser";

const Index = (props) => {
  const [isSended, setIsSended] = useState(false);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useLayoutEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width, height } = useWindowDimensions();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_koz55ee",
        "template_i6fx4su",
        form.current,
        "XLpDbtkLLvEoRJAF5"
      )
      .then(
        (result) => {
          const url =
            "https://api.whatsapp.com/send?phone=557599080292&text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.";
          window.open(url, "_blank", "noopener,noreferrer");
          props.setPopup(false);
          setIsSended(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Popup
      contentStyle={
        width > 991
          ? { width: width / 1.2, height: height / 1.2, borderRadius: "50px" }
          : { width: width / 1.2, borderRadius: "50px" }
      }
      position="center center"
      onClose={() => {
        props.setPopup(false);
      }}
      open={true}
    >
      <Container>
        <div>
          <Title>PREENCHA OS DADOS ABAIXO</Title>
          <Description>
            CERTIFIQUE-SE DAS INFORMAÇÕES PREENCHIDAS ANTES DO ENVIO
          </Description>

          <Form ref={form} onSubmit={sendEmail}>
            <div style={{ display: "grid", justifyContent: "center" }}>
              <Text>Name</Text>
              <Input
                name="name"
                style={{ width: width / 5, height: height / 16 }}
                placeholder="Ex: João"
              />

              <Text>WhatsApp</Text>
              <Input
                name="whatsapp"
                style={{ width: width / 5, height: height / 16 }}
                placeholder="Ex: (12) 3 45678910"
              />

              <Text>E-mail</Text>
              <Input
                name="email"
                style={{ width: width / 5, height: height / 16 }}
                placeholder="Ex: joaopedro@gmail.com"
              />
            </div>

            <Nota>
              Nota: Ao preencher os dados eles serão enviados automaticamente
              para o nosso <br />
              WhatsApp, e assim você poderá continuar com sua jornada pelo
              NewLead.
            </Nota>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{ width: width / 5, height: height / 16 }}
                type="submit"
                onClick={sendEmail}
              >
                {!isSended
                  ? "Entrar em contato agora"
                  : "Solicitação de contato enviada com sucesso!"}
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Popup>
  );
};

export default Index;
