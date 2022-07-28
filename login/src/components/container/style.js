import styled from "styled-components";
import uolBallImg from "./uol-ball.png"

export const Container = styled.div`
font-family: sans-serif;
height: calc(100% - 284px);
background-image: url(${uolBallImg});
background-repeat: no-repeat;
background-position: left bottom;
background-size: 35% auto;
@media(max-width: 800px) {
    background-size: 80% auto;
}
`




