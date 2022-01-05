import axios from "axios";
import React from "react";

export default class AdicionarMusica extends React.Component {
  state = {
    nomeMusica: '',
    nomeArtista: '',
    urlMusica:'',
    listaDeMusicas: []
  }

  mudaInputMusica = (event) =>{
    this.setState({nomeMusica:event.target.value})
  }

  mudaInputArtista = (event) => {
    this.setState({nomeArtista:event.target.value})
  }

  mudarInputUrl = (event) => {
    this.setState({urlMusica:event.target.value})
  }

  AdicionarMusica = (id) => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
    
    let body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeArtista,
      url: this.state.urlMusica
    }

    let autorizacao = {
      headers: {
        Authorization: "natalia-alves-joy"
      } 
    }

    axios.post(URL, body, autorizacao)
    .then((response) => {
      this.setState({nomeMusica: '', nomeArtista: '', urlMusica: ''})
      alert("Música adicionada com sucesso!")
    })
    .catch((error) => {alert(error)})
  }

    render(){

      return (
        <div>
          <h3 Adiciona Musica/>
          <div>
          <input type="text" placeholder="Digite música" value={this.state.nomeMusica} onChange={this.mudaInputMusica}/>
          <input type="text" placeholder="Digite artista" value={this.state.nomeArtista} onChange={this.mudaInputArtista}/>
          <input type="text" placeholder="Link" value={this.state.urlMusica} onChange={this.mudarInputUrl}/>
          <button onClick ={this.AdicionarMusica}>Adicionar Música</button>
          </div>
        </div>
      ); 
    }
    
  }