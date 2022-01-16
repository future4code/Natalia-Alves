import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'



const Card = styled.div`
    margin: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 25vw;
    height: 96vh;

`
const EstilizarPerfil = styled.div`
    margin: 3px;
    padding-left: 5px;
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`
const ImagemEditada = styled.img`
    margin: 20px;
    padding: 1px;
    display: flex;
    align-items: center;
    width: 25vw;
    height: 45vh;

`
const Match = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 25vw;

`

function CardsPerfil() {
    const [imagens, setImagens] = useState({});
    const [listaMatch, setListaMatch] = useState ([]);

   
    const pegaFotos = async () => {
        await axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia-gouveia/person`
        ).then((response) =>{
            setImagens(response.data.profile)    
        })
        .catch((error) =>{
            alert ("erro")
        } )
    }

    useEffect (() => {
        pegaFotos()
    }, []);

    const saladaMista = (id) =>{
        const body ={
            id: imagens.id,
            choice: true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia-gouveia/choose-person",
        body,
        {
            headers:{
                Authorization:"natalia"
            }
        }
        ).then((response) => {
            // setListaMatch(response.data)
            console.log(response.data)
            pegaFotos()
        }).catch((error) => {
            alert ("erro")
        })
    }

    return (
        <Card>
            <p><ImagemEditada src = {imagens && imagens.photo}/></p>
            <EstilizarPerfil>
              <p>{imagens && imagens.name}, {imagens && imagens.age}</p>
              <p>{imagens && imagens.bio}</p>               
            </EstilizarPerfil>
            <Match>
                <button onClick={() => saladaMista (true)}>salada mista</button>
                <button onClick={() => saladaMista (!true)}>é essa? não!</button>
            </Match>
        </Card>

    );
  }
  
  export default CardsPerfil;