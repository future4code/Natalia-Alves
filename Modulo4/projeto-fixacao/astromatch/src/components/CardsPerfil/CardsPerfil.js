import React, {UseState , UseEffect, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';

const Card = styled.div`
    margin: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    height: 85vh;
    border: 1px solid black;
    border-radius: 5px;
`


function CardsPerfil() {
    const [imagensUsuario, setImagensUsuario] = useState({})

    useEffect (() => {
        pegaFotos()
    }, [imagensUsuario])

    const pegaFotos = () => {
        axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia-alves/person`).then((response) =>{
            setImagensUsuario(response.data.profile)
            
        })
        .catch((response) =>{
            console.log(response.error)
        } )
    }

    return (
        <Card>
            <PerfilUsuario>
            {/* <div>
            {imagensUsuario.map((profile) => 
            <li key ={profile.id}>{profile.name}</li> 
            )}
            </div> */}
            </PerfilUsuario>
            
        </Card>

    );
  }
  
  export default CardsPerfil;