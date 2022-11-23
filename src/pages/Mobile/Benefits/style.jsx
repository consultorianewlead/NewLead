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
font-size: 28px;
text-align: center;
`;

export const Box = styled.div`
height: 180px;
padding: 15px;
display: grid;
justify-content: center;
align-content: center;
text-align: center;
background-color: #fff;
-webkit-box-shadow: 0px 0px 35px -14px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 0px 35px -14px rgba(0,0,0,0.2);
box-shadow: 0px 0px 35px -14px rgba(0,0,0,0.2);
border-radius: 30px;
margin-top: 5%;

svg {
    color: #CF0026;
    width: 40px;
    height: 40px;
    margin-bottom: 3%;
}

`;

export const TitleBox = styled.h1`
color: #CF0026;
font-size: 22px;
`;

export const DescriptionBox = styled.p`
color: #5F5F5F;
font-size: 3vw;
font-weight: 500;
`;