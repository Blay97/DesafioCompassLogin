import React, { useState, useEffect } from 'react';
import { Button, Footer, CustomButton, DivFooter, Time, CustomLabel, LabelCustomFooter, DivTimeFooter, DivLabel, DivSeconds, LabelSeconds, TimeDiv } from './style';
import { useNavigate } from 'react-router-dom';


function CustomFooter() {

    const [timer, setTimer] = useState(600);
    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }

    useEffect(() => {
        setInterval(() => {
            setTimer((old) => old - 1)
        }, 1000);
    }, [])

    function timeReset() {
        setTimer(600)
    }

    if (timer === 0) {
        navigate("/");
    }

    return (
        <Footer>
            <DivFooter>
                <DivFooter>
                <LabelCustomFooter>
                    <CustomLabel>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. </CustomLabel>
                    <CustomLabel>Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</CustomLabel>
                </LabelCustomFooter>
                <DivTimeFooter>
                    <DivLabel>
                        <div>
                            <CustomLabel>
                                Application
                            </CustomLabel>
                        </div>
                        <div>
                            <CustomLabel>
                                refresh in:
                            </CustomLabel>
                        </div>
                    </DivLabel>
                    <DivSeconds>

                    <TimeDiv>
                        <Time>{timer}</Time>
                    </TimeDiv>
                        <LabelSeconds>seconds</LabelSeconds>
                    </DivSeconds>
                </DivTimeFooter>

                <div style={{ display: "flex" }}>
                    <div>
                        <CustomButton onClick={timeReset}>continuar navegando</CustomButton>
                    </div>
                    <div>
                        <Button onClick={logout}>Logout</Button>
                    </div>
                </div>
            </DivFooter>
        </DivFooter>
        </Footer >
    );
}

export default CustomFooter;