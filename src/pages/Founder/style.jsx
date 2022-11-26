import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10%;
`;

export const Photo = styled.img`
border-radius: 50px;
margin-right: 5%;
`;

export const Title = styled.h1`
color: #1476C6;
font-size: 64px;
`;

export const Description = styled.p`
color: #5F5F5F;
font-size: 1.2vw;
font-weight: 500;
display: inline;
width: 650px;

@media (max-width: 1300px) {
    width: 400px;
}

`;