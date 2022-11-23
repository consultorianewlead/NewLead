import React, { useState, useLayoutEffect } from 'react';
import { Container, Photo, Title, Box, TitleBox, DescriptionBox } from './style';
import Benefits from '../../assets/Benefits.svg';
import { BsGearWideConnected, BsGraphUp } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';

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
    <Container id='Benefits'>

        <div style={{ display: "grid", marginLeft: "3%" }}>

            <Title>Entregue pela New Lead</Title>

            <Box>
                <BsGearWideConnected />
                <div>
                    <TitleBox>Principais ferramentas</TitleBox>
                    <DescriptionBox>A nossa consultoria é focada na implementação das principais ferramentas e <br/>
                    mecanismos para que sua empresa seja referência na internet. 
                </DescriptionBox>
                </div>
            </Box>

            <Box>
                <BsGraphUp />
                <div>
                    <TitleBox>Melhores resultados</TitleBox>
                    <DescriptionBox>
                    Estamos presentes em todo o processo de vendas da sua empresa, entendendo <br />
                    e analisando os pontos para ser possível alcançar os melhores resultados com <br />
                    a internet.
                    </DescriptionBox>
                </div>
            </Box>

            <Box>
                <FiUsers />
                <div>
                    <TitleBox>Atraimos clientes</TitleBox>
                    <DescriptionBox>Os anúncios são como pontes, conectando os usuários na internet, aos <br/>
                    seus serviços e produtos.seus serviços e produtos.seus serviços e produtos.
                </DescriptionBox>
                </div>
            </Box>

            <Box>
                <BiLink />
                <div>
                    <TitleBox>Conexão com você</TitleBox>
                    <DescriptionBox>Estaremos presentes diariamente, semanalmente e mensalmente com informações <br/>
                    sobre os processos feitos e resultados alcançados. Além de reuniões direcionados a <br/>
                    ideias, planejamentos, execuções e análises com os envolvidos no projeto.
                </DescriptionBox>
                </div>
            </Box>

        </div>

        <Photo style={{ width: width / 2.5}} src={Benefits} />
    </Container>
  )
}

export default Index