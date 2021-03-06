import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppHeader = styled.header`
    width:100vw;
    height:18vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: silver solid 1px;
    button{
            display: flex;
            width: 200px;
            height: 20px;
            margin-left: auto;
            margin-top: 1em;
            display: block;
            margin-right: 5px;
        }
`
const ApplicationFormPageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    padding: 4vh;
        form{
            display: flex;
            flex-direction: column;
            width: 60vw;
                select{
                    height: 5vh;
                }
                textarea{
                    height: 10vh;
                }
        }
`
const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    padding:20px;
    
`
const PreviousPage = styled.button`
   
    width: 160px;
    margin-right: 200px;
`
const Submit = styled.button`
    width: 160px;
    margin-left: 200px;
`

function ApplicationFormPage(){

    let navigate = useNavigate ();

    return(
        <div>
        <AppHeader>
        </AppHeader>
        <ApplicationFormPageBody>
        <h3>TENS O QUE É NECESSÁRIO PARA FAZER UMA VIAGEM CONOSCO? CLIQUE AQUI E SE INSCREVA!</h3>
        <form>
            <select>
            <option value="" disabled selected>Escolha uma viagem</option>

            </select>
            <br></br>
            <input placeholder='Nome' type="text"></input>
            <br></br>
            <input placeholder='Idade' type={Number}></input>
            <br></br>
            <input placeholder='Profissão'></input>
            <br></br>
            <select>
            <option value="" disabled selected>Escolha um país</option>

            </select>
            <br></br>
            <textarea placeholder='Texto da Candidatura'>
            </textarea>
        </form>
        <StyledButtons>
        <PreviousPage onClick={()=> {
                    navigate("/listtrips")
                }}>VOLTAR</PreviousPage>
        <Submit>ENVIAR</Submit>
        </StyledButtons>
        </ApplicationFormPageBody>
        </div> 
    )
    
}

export default ApplicationFormPage;