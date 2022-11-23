import React from 'react'
import { Icon, Title, Description } from './style';
import IconAbout from '../../../assets/About.svg';

const Index = () => {
  return (
    <div id='About' style={{ display: "flex", justifyContent: "center", padding: 30, marginTop: "10%" }}>
        <div>
            <Icon src={IconAbout} />
            <Title>Sobre a New Lead</Title>
            <Description>A Consultoria New Lead surgiu com a proposta
            de unir as estratégias e processos que foram
            usados na criação e gerenciamento de mais 100
            empresas, empresas essas que ultrapassaram
            os 7 dígitos(milhões) de faturamento em nossos
            resultados. Além disso, está a união de 
            profissionais que buscam incansavelmente O
            Novo e dividem ambições na vida.</Description>
        </div>
    </div>
  )
}

export default Index;