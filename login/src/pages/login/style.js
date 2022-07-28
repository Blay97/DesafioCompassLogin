import styled from "styled-components";

export const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100%;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
height: 100vh;
`
export const ColumnLogin = styled.div`
width:50%;
display: flex;
justify-content: center;
height: 100vh;
@media (max-width: 700px) {
    width: 100%;
    margin: 0px;
}     
`
export const ColumnImage = styled.div`
width:50%;
height: 100vh;
@media (max-width: 700px) {
    width: 0%;
    margin: 0px;
}  
`
export const ButtonSubmit = styled.input`
box-sizing: border-box;
width: 379px;
height: 60px;
background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
border-radius: 50px;
`
export const InputCustom = styled.input`
box-sizing: border-box;
width: 379px;
height: 60px;
background: #26292C;
border: 1px solid #FFFFFF;
border-radius: 50px;
::placeholder{
    width: 61px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #E0E0E0;
    padding-left: 10px;
}
`

export const Span = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #E9B425;
`
export const DivCustom = styled.div`

display: flex;
align-content: stretch;
justify-content: center;
flex-direction: column;
`

export const SubContainerlogin = styled.div`
width: min-content;
margin-top: 240px;
`

export const LogoLogin = styled.div`
    display: none;
@media (max-width: 700px) {
    display: block;
    
}
`

export const DivHidden = styled.div`
    display: none;


`
