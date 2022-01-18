import React, {useState , useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  width: 25vw;
  height: 96vh;

`
const ImagemEditada = styled.img`
  display: flex;
  width: 5vw;
  height: 8vh;
  border-radius: 50%;

`
const ListaMatches = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  align-content: left;
  margin-left: 5px;

`
const ButtonAway = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 25vw;
  height: 5vh;
  border: 2px purple solid;
  cursor: pointer;
  background-color: violet;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  &:hover{
    background-color: purple;
  }
`

function Mensagem(props) {
  const [listaMatches, setListaMatches] = useState ([]);

  const getMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia-gouveia/matches"
    ).then((response) => {
      setListaMatches(response.data.matches)
    }).catch((error) => {alert ("erro")
      })

  }

  useEffect  (() => {
    getMatches()
  }, []);


  const getMatchesFilter = listaMatches.map((match) => {
    return(
      <ListaMatches key={match.id}>
        <ImagemEditada src= {match.photo}/>
        <p>{match.name}</p>
      </ListaMatches>
    )
  });

  const limpaMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natalia-gouveia/clear"
    ).then((response) => {
      alert ("Lista Exluida!")
      getMatches()
    }).catch((error) => {
      console.log("erro")
    })
  }


  
    return (
      <Container>
       {listaMatches && getMatchesFilter}
       <ButtonAway onClick={() => limpaMatches()}>Limpa Matches</ButtonAway>
      </Container>
    );
  }
  
  export default Mensagem;