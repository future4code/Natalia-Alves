import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            margin-right: 5px;
        }
`
const AdminHomePageBody = styled.div`
    display: flex;
    flex-direction: column;

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

    let navigate = useNavigate ();

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
            
        </AdminHomePageBody>
    </div>
    )
 
}

export default AdminHomePage;