import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
border-radius: 50px;
@media only screen and (max-width: 768px) {
    padding: 30px;
}
`;

export const Title = styled.h1`
font-size: 2vw;
color: #0A1719;
font-weight: 800;
text-align: center;

@media only screen and (max-width: 768px) {
    font-size: 5vw;
}

`;

export const Description = styled.p`
color: #ED114C;
font-size: 0.8vw;
text-align: center;
font-weight: 600;

@media only screen and (max-width: 768px) {
    font-size: 4vw;
}

`;

export const Form = styled.form`
display: grid;
justify-content: center;
margin-top: 5%;
`;

export const Text = styled.p`
font-size: 0.8vw;
margin-top: 3%;

@media only screen and (max-width: 768px) {
    font-size: 3vw;
}

`;

export const Input = styled.input`
background-color: #F2F4F5;
border: 1px solid #B3BBBC;
border-radius: 15px;
padding-left: 15px;
margin-top: 1.5%;
outline: none;
font-family: 'Poppins';
font-size: 0.8vw;

&::placeholder {
    color: #B3BBBC;
}

@media only screen and (max-width: 768px) {
    width: 280px !important;
    font-size: 3vw;
}


`;

export const Nota = styled.p`
text-align: center;
margin-top: 5%;
color: #828282;
font-size: 0.8vw;

@media only screen and (max-width: 768px) {
    font-size: 3vw;

    br {
        display: none;
    }
}

`;

export const Checkbox = styled.div``;

export const Button = styled.button`
background-color: #1476C6;
color: #fff;
border-radius: 15px;
margin-top: 3%;
cursor: pointer;
font-size: 0.8vw;

@media only screen and (max-width: 768px) {
    font-size: 3vw;
    width: 280px !important;
}

`;