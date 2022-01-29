import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './utils/constants';

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
    margin-top: 20px;
    margin-bottom: 20px;
`

function ListTripsPage(){
    const [listTrips, setListTrips] = useState ([])

    let navigate = useNavigate ();

    const GetTrips =()=>{
        axios.get(`${BASE_URL}/trips`).then((response) =>{
            setListTrips(response.data.trips)
        }).catch((error) => {alert("erro")})
    }

    useEffect (() => {
        GetTrips()
    }, []);

    const GetTripsMap = listTrips.map ((trips) =>{
        return(
            <StyledTripDiv key = {trips.id}>
            <p>Nome: {trips.name}</p>
            <p>Descrição: {trips.description}</p>
            <p>Planeta: {trips.planet}</p>
            <p>Duração: {trips.durationInDays}</p>
            <p>Data: {trips.date}</p>

            </StyledTripDiv>
        )
    })

    return(
        <div>
            <ListTripsPageHeader>
                <button onClick={()=> {
                    navigate("/applicationform")
                }}>INSCREVA-SE</button>
            </ListTripsPageHeader>
            <ListTripsPageBody>
                <button onClick={()=> {
                    navigate("/")
                }}>PÁGINA ANTERIOR</button>
                <h1>LISTA DE VIAGENS</h1>

                {GetTripsMap}

            </ListTripsPageBody>

        </div>
    )
}

export default ListTripsPage;