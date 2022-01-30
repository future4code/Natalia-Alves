import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './utils/constants';

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
const StyledDetails = styled.div`
    border: lightslategray solid 2px;
    width: 30vw;
    margin-left: 460px;
    margin-bottom: 20px;
    margin-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
`
const StyledCandidates = styled.div`
    border: lightslategray solid 2px;
    width: 30vw;
    margin-left: 460px;
    margin-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
        button{
            margin-left: 70px;
        }
`
const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`

function TripDetailsPage(){

    let navigate = useNavigate ();
    const { id } = useParams();

    const [trip, setTrip] = useState ({})
    const [candidates, setCandidates] = useState ([])
    const [decide, setDecide] = useState ()


    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(`${BASE_URL}/trip/${id}`,{
                headers: {
                    auth: localStorage.getItem("token")
                }
            });
            console.log(data)
            setTrip(data.trip)
            setCandidates(data.trip.candidates)
        }; fetch();
    }, []);

    const MapCandidates = candidates.map((candidates) =>{
        return(
            <StyledCandidates key = {candidates.id}>
                <p>Nome: {candidates.name}</p>
                <p>País: {candidates.country}</p>
                <p>Idade: {candidates.age}</p>
                <p>Profissão: {candidates.profession}</p>
                <p>Texto da Candidatura: {candidates.applicationText}</p>
                <button onClick={() => decideCandidate(true)}>APROVAR</button>
                <button onClick={() => decideCandidate(!true)}>REPROVAR</button>
            </StyledCandidates>
        )
    })

    const decideCandidate = (boolean, id , candidatesId) =>{
        const body ={
            approve: boolean
        }
        axios.put(`${BASE_URL}/trips/${id}/candidates/${candidatesId}/decide`,
        body,
        {
            headers:{
                auth: localStorage.getItem("token")
            }
        }
        ).then((response) => {
            console.log (response.data)
        }).catch((error) => {
            alert ("erro")
        })
    }



    return(
    <div>
        <TripDetailsPageHeader>
            <button>LOGOUT</button>
        </TripDetailsPageHeader>
        <StyledDetails>
            <h3>{trip.name}</h3>
            <p>{trip.date}</p>
            <p>{trip.durationInDays}</p>
            <p>{trip.planet}</p>
            <p>{trip.description}</p>
        </StyledDetails>
        <StyledButton>
            <button onClick={() => navigate ("/adminhomepage")}>VOLTAR</button>
        </StyledButton>
        <div>
                {MapCandidates}
                
        </div>

    </div>
    )

}

export default TripDetailsPage;