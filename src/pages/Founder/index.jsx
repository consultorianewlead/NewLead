import React from 'react'
import { Container, Photo, Title, Description } from './style';
import Fundador from '../../assets/Fundador.jpg';

const Index = () => {
  return (
    <Container id='Fouder'>
        <Photo src={Fundador} />
        <div style={{ display: "grid" }}>
            <Title>O fundador</Title>
            <Description>
                Meu nome é Enilton Martins, morador nas regiões mais<br/>
                incríveis da Chapada Diamantina. Estou presente a mais<br/>
                de 3 anos no mercado, com formação em Gestão<br/>
                Comercial e atuando na área de Marketing Digital.<br/><br/>
                
                Durante esse período, tive como experiência a atuação<br/>
                em organizações, sendo Sebrae, V4 Company, Vale<br/>
                Criativa, Sal Marketing e outros. Criador e gestor de<br/>
                diversas campanhas de marketing no mundo dos<br/>
                anúncios on-lines e com resultados que ultrapassaram<br/>
                os milhões de faturamento.<br/><br/>
                
                Isso é um pouco que consigo contar aqui sobre os nossos<br/>
                resultados, porém, o mais incrível de tudo isso, é saber<br/>
                que por causa das ideias, a dedicação e entrega que foi<br/>
                feita, não teríamos nenhum desses resultados e eu não<br/>
                poderia estar dividindo contigo aqui.
            </Description>
        </div>
    </Container>
  )
}

export default Index