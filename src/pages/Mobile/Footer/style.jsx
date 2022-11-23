import styled from "styled-components";

export const Container = styled.div`
height: 100%;
background-color: #ECECEC;
display: grid;
justify-content: center;
align-content: center;
padding: 30px;
padding-bottom: 0;
margin-top: 10%;
border-bottom: 2px solid #1476C6;
`;

export const Title = styled.h1`
color: #1476C6;
font-weight: 500;

span {
    font-weight: 800;
}

`;

export const Button = styled.button`
background-color: #1476C6;
width: 100%;
height: 60px;
border-radius: 20px;
margin-top: 8%;
color: #fff;
font-weight: 500;
`;

export const Icon = styled.img`
width: 100%;
margin-top: 10%;
`;

export const Footer = styled.div`
display: grid;
justify-content: center;
align-content: center;
padding: 30px;
`;

export const Logo = styled.img`
width: 80%;
`;

export const Description = styled.p`
color: #4E4E4E;
font-weight: 500;
font-size: 4vw;
margin-top: 5%;
`;

export const BackToTop = styled.a`
width: 100%;
height: 60px;
background-color: #A2D3FB;
color: #1476C6;
border-radius: 20px;
margin-top: 5%;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`;