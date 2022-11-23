import React, { useState, useLayoutEffect } from 'react'; 
import { BsGearWideConnected, BsGraphUp } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiLink } from 'react-icons/bi';
import { Title, Box, TitleBox, DescriptionBox } from './style';

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
    <div id='Benefits' style={{ display: "grid", justifyContent: "center", marginTop: "10%" }}>

            <Title>Entregue pela New Lead</Title>

            <Box style={{ width: width / 1.2 }}>
                <div style={{ display: "flex", justifyContent: "center"}}><BsGearWideConnected /></div>
                <div>
                    <TitleBox>Principais ferramentas</TitleBox>
                    <DescriptionBox>A nossa consultoria é focada na implementação das principais ferramentas emecanismos para que sua empresa seja referência na internet. </DescriptionBox>
                </div>
            </Box>

            <Box style={{ width: width / 1.2 }}>
                <div style={{ display: "flex", justifyContent: "center"}} ><BsGraphUp /></div>
                <div>
                    <TitleBox>Melhores resultados</TitleBox>
                    <DescriptionBox>
                    Estamos presentes em todo o processo de vendas da sua empresa, entendendo
                    e analisando os pontos para ser possível alcançar os melhores resultados com
                    a internet.
                    </DescriptionBox>
                </div>
            </Box>

            <Box style={{ width: width / 1.2 }}>
                <div style={{ display: "flex", justifyContent: "center"}} ><FiUsers /></div>
                <div>
                    <TitleBox>Atraimos clientes</TitleBox>
                    <DescriptionBox>Os anúncios são como pontes, conectando os usuários na internet, aos seus serviços e produtos.
                </DescriptionBox>
                </div>
            </Box>

            <Box style={{ width: width / 1.2 }}>
                <div style={{ display: "flex", justifyContent: "center"}}><BiLink /></div>
                <div>
                    <TitleBox>Conexão com você</TitleBox>
                    <DescriptionBox>Estaremos presentes diariamente, semanalmente e mensalmente com informações
                    sobre os processos feitos e resultados alcançados. Além de reuniões direcionados a
                    ideias, planejamentos, execuções e análises com os envolvidos no projeto.
                </DescriptionBox>
                </div>
            </Box>

        </div>
  )
}

export default Index;