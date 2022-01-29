import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TripDetailsPageHeader = styled.header`
    width:100vw;
    height:18vh;
    display: flex;
    justify-content: center;
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
const TripDetailsPageBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 330px;
    border: lightslategrey solid 2px;
    width: 45vw;
    margin-top: 20px;
    padding-left: 20px;
    background-color: silver;
    height: 70vh;

`
const TripForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

        input{
            width: 460px;
            display: flex;
            padding-bottom: 5px;
            padding-top: 5px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        select{
            padding-bottom: 5px;
            padding-top: 5px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
`
const StyledButtons = styled.div`
    display: flex;
        button{
            margin-right: 55px;
            margin-left: 55px;
            width: 160px;

        }
`

function CreateTripPage(){

    let navigate = useNavigate ();

    return(
    <div>
        <TripDetailsPageHeader>
            <button>LOGOUT</button>
        </TripDetailsPageHeader>
        <TripDetailsPageBody>
            <h2>CRIAR VIAGEM</h2>
            <TripForm>
            <input placeholder='Nome'></input>
            <input placeholder='Descrição'></input>
            <input placeholder='Duração em dias'></input>
            <select>
            <option value="" disabled selected>Escolha um planeta</option>
            </select>
            <input placeholder='Data'></input>
            </TripForm>
            <StyledButtons>
                <button onClick={()=> {
                    navigate("/adminhomepage")
                }}>VOLTAR</button>
                <button>CRIAR</button>
            </StyledButtons>
        </TripDetailsPageBody>

    </div>
    )

}

export default CreateTripPage;