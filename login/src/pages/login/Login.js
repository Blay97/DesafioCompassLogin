import React from 'react';
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Row, ColumnLogin, ColumnImage, ButtonSubmit, InputCustom, Span, DivCustom, SubContainerlogin, LogoLogin, DivHidden } from './style.js';
import logo from '../../images/compass-logo.png';
import CustomLabel from '../../components/label/label'
import { useNavigate } from "react-router-dom";


function Login() {
    document.title = "Compas- Login";
    let navigate = useNavigate();

    const [showElement, setShowElement] = useState(false)

    const { handleSubmit, register } = useForm();

    const onSubmit = data => {

        if (data.username === "" || data.password === "") {
            document.getElementById('hidden').style.display = 'block';
        } else {
            document.getElementById('hidden').style.display = 'none';

            if (data.username === "admin" && data.password === "admin") {
                navigate(`/home`);
                setShowElement(false);
            } else {
                setShowElement(true); 
              
            }
        }
    }

    return (
        <div>
            <Row>

                <ColumnLogin>
                    <div>
                        <div>
                            <LogoLogin>
                                <img src={logo} alt="logo" />
                            </LogoLogin>

                        </div>
                        <SubContainerlogin>

                            <DivCustom>
                                <div>
                                    <h1>
                                        Olá,
                                    </h1>
                                </div>
                                <div>
                                    <h3>
                                        Para continuar navegando de forma segura, efetue o login na rede.
                                    </h3>
                                </div>
                            </DivCustom>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div><CustomLabel>Login</CustomLabel></div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ marginBottom: "20px" }}>
                                        <InputCustom {...register('username')} type="text" placeholder='Usuario'
                                        />
                                    </div>

                                    <div style={{ marginBottom: "20px" }}>
                                        <InputCustom {...register('password')} type="password" placeholder='Senha' />
                                    </div>
                                    <div>
                                        {showElement && <Span>Ops, usuário ou senha inválidos. Tente novamente!</Span>}
                                        <DivHidden id='hidden'> <Span>Campos Obrigatórios</Span></DivHidden>

                                    </div>
                                    <div>
                                        <ButtonSubmit type="submit" value={"Continuar"} />
                                    </div>
                                </div>
                            </form>
                        </SubContainerlogin>
                    </div>
                </ColumnLogin>

                <ColumnImage >
                    <div class="container">
                        <div style={{ textAlign: "center" }}>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>

                </ColumnImage>
            </Row>

        </div>
    );
}

export default Login;
