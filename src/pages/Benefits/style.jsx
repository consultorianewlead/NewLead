import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10%;
`;

export const Photo = styled.img`
border-radius: 50px;
margin-left: 5%;
`;

export const Title = styled.h1`
color: #CF0026;
font-size: 48px;
text-align: center;
`;

export const Box = styled.div`
width: 650px;
height: 120px;
padding: 15px;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #fff;
-webkit-box-shadow: 0px 0px 35px -14px rgba(0,0,0,0.1);
-moz-box-shadow: 0px 0px 35px -14px rgba(0,0,0,0.1);
box-shadow: 0px 0px 35px -14px rgba(0,0,0,0.1);
border-radius: 30px;
margin-top: 3%;

svg {
    color: #CF0026;
    width: 50px;
    height: 50px;
}

`;

export const TitleBox = styled.h1`
color: #CF0026;
font-size: 32px;
`;

export const DescriptionBox = styled.p`
color: #5F5F5F;
font-size: 12px;
font-weight: 500;
`;