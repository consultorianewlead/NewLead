import styled from "styled-components";

export const Nav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10%;
`;

export const Logo = styled.img`
width: 50%;
`;

export const Box = styled.div`
z-index: 10;
width: 45px;
height: 45px;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
cursor: pointer;

svg {
    color: #fff;
    font-size: 30px;
}

`;

export const Menu = styled.div`
position: fixed;
background-color: #000000e2;
width: 100%;
height: 100%;
top: 0;
display: flex;
justify-content: center;
align-items: center;

div {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
}

`;

export const Link = styled.a`
color: #fff;
font-weight: 600;
text-decoration: underline 3px;
text-underline-offset: 10px;
margin-top: 10%;
display: flex;
justify-content: center;
align-items: center;

svg {
    margin-left: 5%;
}

`;

export const Title = styled.p`
color: #000;
font-size: 5vw;
margin-top: 10%;
font-weight: 600;
margin-left: 8%;
`;

export const Description = styled.p`
font-size: 4vw;
color: #5A5A5A;
font-weight: 500;
margin-top: 8%;
margin-left: 8%;
`;

export const Button = styled.button`
background-color: #1476C6;
width: 90%;
height: 60px;
border-radius: 20px;
margin-top: 8%;
color: #fff;
font-weight: 500;
`;

export const Down = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #1476C6;
font-size: 18px;
margin-top: 5%;

svg {
    margin-right: 3%;
}

`;