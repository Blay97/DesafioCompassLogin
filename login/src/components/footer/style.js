import styled from "styled-components";

export const Footer = styled.footer`
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);    text-align: right;
height: 100px;
`

export const DivFooter = styled.div`
display: flex;
justify-content: space-between;
width: -webkit-fill-available;
`
export const Button = styled.button`
height: 100px;
right: 100px;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%); 
color:white;
width: 100px;
`
export const CustomButton = styled.button`
height: 100px;
right: 100px;
background: #FFFFFF; 
color:#C13216;
width: 100px;
`

export const Time = styled.label`
font-family: 'Poppins';
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-align: center;
color: #FFFFFF;

`
export const CustomLabel = styled.label`
width: 541px;
left: 354px;
top: 1014px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
text-align: right;
color: #FFFFFF;
`
export const CustomDiv = styled.div`
display: flex;
justify-content: flex-end;
align-content: space-around;
align-items: flex-end;
`

export const LabelCustomFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
@media(max-width: 800px) {
    display: none;
}
`

export const DivTimeFooter = styled.div`
display: flex;
align-Items: "center";
@media(max-width: 800px) {
    display: none;
}
`
export const DivLabel = styled.div`
display: flex;
    flex-direction: column;
    margin-top: 29px;
`
export const LabelSeconds = styled.div`
justify-content: center;
    margin-top: -15px;
    
`

export const DivSeconds = styled.div`
  color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -16px;
    margin-left: 10px;
    justify-content: center;
`
export const TimeDiv = styled.div`
display: flex;
align-items: center;
 margin-Left: 9px 
`
