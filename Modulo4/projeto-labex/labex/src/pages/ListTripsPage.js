import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListTripsPageHeader = styled.header`
    width:100vw;
    height:18vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: silver solid 1px ;
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
const ListTripsPageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    padding: 4vh;
`
const StyledTripDiv = styled.div`
    background-color: silver;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border:black solid 1px;


`

function ListTripsPage(){

    return(
        <div>
            <ListTripsPageHeader>
                <button>INSCREVA-SE</button>
            </ListTripsPageHeader>
            <ListTripsPageBody>
                <button>PÁGINA ANTERIOR</button>
                <h1>LISTA DE VIAGENS</h1>
                <StyledTripDiv>
                <p>Nome: Viagem da minha vida</p>
                <p>Descrição: A mais aguardada do ano, a mais esperado da aminha vida inteira!!!!!!!!!!!!!!!!!!!</p>
                <p>Planeta: Saturno</p>
                <p>Duração: 60</p>
                <p>Data: 2021-12-09</p>

                </StyledTripDiv>
            </ListTripsPageBody>

        </div>
    )
}

export default ListTripsPage;