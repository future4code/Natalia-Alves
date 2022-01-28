import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginPageHeader = styled.header`
    width:100vw;
    height:18vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: silver solid 1px;
`

const LoginBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 55vw;
    height: 60vh;
    background-color: blueviolet;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    margin-left:22vw;
    margin-right: 22vw;
    margin-top:10vh;
        input{
            width: 30vw;
            height: 5vh;
        }
`
const StyledButtons = styled.div`
    display: flex;
    align-items: center;
        button{
            margin-right: 30px;
            margin-left:30px;
            width: 160px;
        }

`

function LoginPage(){

    return(
    <div>
        <LoginPageHeader>

        </LoginPageHeader>
        <LoginBody>
            <h3>LOGIN - ÁREA DO ADMINISTRADOR</h3>
            <input placeholder='E-mail'></input>
            <input placeholder='senha'></input>
            <StyledButtons>
            <button>VOLTAR</button>
            <button>ENTRAR</button>
            </StyledButtons>
        </LoginBody>

    </div>
    )

}

export default LoginPage;