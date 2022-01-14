import React, {UseState , UseEffect, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import HeaderFooter from '../HeaderFooter/HeaderFooter';

const Card = styled.div`
    margin: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 25vw;
    height: 96vh;
    border: 1px solid black;
    border-radius: 5px;

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
    margin: 1px;
    padding: 1px;
    display: flex;
    align-items: center;
    width: 25vw;
    height: 45vh;

`
const Match = styled.div`
    display:flex;
    align-items: flex-start;
    padding-bottom:15px;
    justify-content: space-evenly;
    align-items: stretch;

`

function CardsPerfil() {
    const [imagens, setImagens] = useState({});
    const [listaMatch, setListaMatch] = useState ([]);

   
    const pegaFotos = async () => {
        await axios.get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia/person`
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
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia/choose-person",
        body,
        {
            headers:{
                Authorization:"natalia"
            }
        }
        ).then((response) => {
            // setListaMatch(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert ("erro")
        })
    }
    return (
        <Card>
            <HeaderFooter>
            </HeaderFooter>
            <p><ImagemEditada src = {imagens.photo}/></p>
            <EstilizarPerfil>
              <p>{imagens.name}, {imagens.age}</p>
              <p>{imagens.bio}</p>               
            </EstilizarPerfil>
            <Match>
                <button onClick={() => saladaMista (imagens.id)}>salada mista</button>
                <button>é essa? não!</button>
            </Match>
        </Card>

    );
  }
  
  export default CardsPerfil;