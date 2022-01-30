import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import {  useNavigate , useParams } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { BASE_URL } from './utils/constants';
import axios from 'axios';
import TripDetailsPage from "./TripDetailsPage";

const AdminHomePageHeader = styled.header`
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
            margin-right: 30px;
        }
`
const AdminHomePageBody = styled.div`
    display: flex;
    flex-direction: column;

`
const StyledTripDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    border: lightslategray solid 2px;
    background-color: silver;
    width: 30vw;
    margin-top: 50px;
    margin-left: 450px;
    padding: 10px;
    cursor: pointer;
        button{
            border: none;
            background-color: silver;
            cursor: pointer;
            :hover{
                size:30px
            }
        }


`


const StyledButtons = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    justify-content:space-between;
    align-items: center;
    align-content: center;
        button{
            width: 260px;
        }
`


function AdminHomePage(){

    const [manageTrips, setManageTrips] = useState ([])
    

    let navigate = useNavigate ();
    const { id } = useParams();

    const GetTrips =()=>{
        axios.get(`${BASE_URL}/trips`).then((response) =>{
            setManageTrips(response.data.trips)
        }).catch((error) => {alert("erro")})
    }

    useEffect (() => {
        GetTrips()
    }, []);

    const GetTripsMap = manageTrips.map ((trips) =>{
        return(
            <StyledTripDisplay key = {trips.id}>
            <p>Nome: {trips.name}</p>
            <button onClick={( ) =>{ navigate (`/tripdetails/${trips.id}`)}}>VER DETALHES</button>
            <button><BsTrash size ={28}/></button>
            </StyledTripDisplay>
        )
    })

    return(
    <div>
        <AdminHomePageHeader>
            <button>LOGOUT</button>
        </AdminHomePageHeader>
        <AdminHomePageBody>
            <StyledButtons>
            <button onClick={()=> {
                    navigate("/loginpage")
                }}>VOLTAR</button>
            <button onClick={()=> {
                    navigate("/createtrip")
                }}>CRIAR VIAGEM</button>
            </StyledButtons>
            <div >
                {GetTripsMap}
            </div>
        </AdminHomePageBody>
    </div>
    )
 
}

export default AdminHomePage;