import React from 'react';
import CustomContainer from '../../components/container/container'
import CustomHeader from '../../components/header/header'
import CustomFooter from '../../components/footer/footer'

import { Container, CustomLabel, CustomLabelPt, Divlabel } from './style'

function Home() {
    document.title = "Compass- Home";

    return (
        <Container>
            <CustomHeader />
            <CustomContainer>
                <Divlabel>
                    <CustomLabel>Our mission is</CustomLabel>
                    <CustomLabelPt>Nossa missão é</CustomLabelPt>
                    <CustomLabel>to transform the world</CustomLabel>
                    <CustomLabelPt>transformar o mundo</CustomLabelPt>
                    <CustomLabel>building digital experiences</CustomLabel>
                    <CustomLabelPt>construindo experiências digitais</CustomLabelPt>
                    <CustomLabel>that enable our client’s growth</CustomLabel>
                    <CustomLabelPt>que permitam o crescimento dos nossos clientes</CustomLabelPt>
                </Divlabel>
            </CustomContainer>
            <CustomFooter />
        </Container>
    );
}


export default Home;
