import styled from "styled-components";

export const Nav = styled.div`
background-color: #fff;
padding: 80px;
padding-bottom: 0px !important;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled.img`
width: 300px;
`;

export const Links = styled.div`
display: flex;
justify-content: center;
align-items: center;
transform: translateX(-80px);
`;

export const Link = styled.a`
font-size: 18px;
color: #000;
margin-right: 5%;
font-weight: 500;
text-decoration: none;
`;

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 5%;
`;

export const Title = styled.h1`
font-weight: 500;
font-size: 2vw;

span {
    font-weight: 800;
}
`;

export const Description = styled.p`
margin-top: 5%;
color: #5A5A5A;
font-size: 1vw;

span {
    color: #444343;
}

`;

export const Button = styled.button`
border-radius: 15px;
font-size: 0.8vw;
background-color: #1476C6;
color: #fff;
margin-top: 5%;
cursor: pointer;
`;

export const Icon = styled.img``;