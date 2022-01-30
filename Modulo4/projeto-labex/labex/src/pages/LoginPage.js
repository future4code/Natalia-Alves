import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './utils/constants';

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
    background-color: silver;
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
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    let navigate = useNavigate ();

    const onChangeEmail = ({target}) => {
        setEmail(target.value);
    }
    
    const onChangePassword = ({target}) => {
        setPassword(target.value);
    }

    const onSubmitLogin = () =>{
        axios.post(`${BASE_URL}/login` , {
            email,
            password
        }).then(({data}) =>{
            localStorage.setItem("token", data.token);
            navigate("/adminhomepage")
            console.log(data)
        }).catch(res => console.log (res));
    }

    return(
    <div>
        <LoginPageHeader>

        </LoginPageHeader>
        <LoginBody>
            <h3>LOGIN - ÁREA DO ADMINISTRADOR</h3>
            <input value = {email} placeholder='E-mail' onChange={onChangeEmail}></input>
            <input value = {password} placeholder='senha' onChange={onChangePassword}></input>
            <StyledButtons>
            <button onClick={()=> {
                    navigate("/")
                }}>VOLTAR</button>
            <button onClick={onSubmitLogin}>ENTRAR</button>
            </StyledButtons>
        </LoginBody>

    </div>
    )

}

export default LoginPage;