import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    height: 185px;
    align-items: center;
    flex-direction: row;
`
export const LabelHour = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 100px;
text-align: center;
color: #222222;
margin-right: 112px;
`
export const DivCustom = styled.div`
text-align: center;
display: flex;
flex-direction: row;
align-content: center;
align-items: center;
margin-bottom: 50px;
`

export const Location = styled.div`
font-family: 'Poppins';
color: "black" ;
`

export const DivTemperature = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
`

export const DivImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 30px;
`
export const LabelHourDate = styled.label`
@media(max-width: 800px) {
    display: none;
}
`