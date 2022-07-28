import React from "react";
import './style';
import { Container } from './style';



function CustomContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>

    );
}
export default CustomContainer;