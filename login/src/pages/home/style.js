import styled from "styled-components";

export const Container = styled.div`
display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export const CustomLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 45px;
text-align: right;
color: #C12D18;
line-height: 60px;
`

export const CustomLabelPt = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;

`

export const Divlabel = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: flex-end;
margin-right: 5%;
margin-top: 5%;
@media(max-width: 800px) {
    display: none;
}

`



