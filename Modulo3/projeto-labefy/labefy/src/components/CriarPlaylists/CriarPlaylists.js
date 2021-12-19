import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";
import AdicionarMusica from "../Adicionar Musica/AdicionarMusica";

const Input = styled.input`
display: flex;
justify-content: space-around;
align-items: center;
`

export default class CriarPlaylist extends React.Component {
    state = {
      textoInput:""
    }

    mudarTextoNoInput = (event) => {
      this.setState({textoInput: event.target.value})
    }

    CriarPlaylist = () =>{
      let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      let body ={
        "name": this.state.textoInput
      }
      let autorizacao = {
        headers:{
          Authorization: "natalia-alves-joy"
        }
      }
      axios.post(URL,body,autorizacao)
    .then((response) => {
      this.setState({textoInput:""})
      alert("Playlist criada com sucesso!")
    })
    .catch((error) => {alert(error)})
    }
    

    render(){
      return (
        <div>
          <Input type="text" value ={this.state.textoInput} onChange ={this.mudarTextoNoInput} placeholder="Nome da Playlist"/>
          <button onClick = {this.CriarPlaylist}>Criar Playlist</button>
        </div>
      ); 
    }
    
  }