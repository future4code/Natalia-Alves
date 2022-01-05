import React, {Component} from "react";
import CriarPlaylists from "./components/CriarPlaylists/CriarPlaylists";
import ExibirPlaylists from "./components/ExibirPlaylists/ExibirPlaylists";
import styled from "styled-components";

const Header = styled.h1`
display: flex;
align-items: center;
justify-content: center;
color: aquamarine;
`


export default class App extends React.Component {
  state={
    exibirPlaylists: false
  }

  mudaCondicaoExibicaoPLaylists = () => {
    this.state.exibirPlaylists ? this.setState({exibirPlaylists: false}): this.setState({exibirPlaylists: true})
  }

  render(){
    
    let mostrarPlaylists = <h1>Erro ao Carregar</h1>
    if(this.state.exibirPlaylists){
      mostrarPlaylists = <ExibirPlaylists/>
    }else{
      mostrarPlaylists = ""
    }
    return (
      <div>
        <Header>
          LABEFY
        </Header>
        <CriarPlaylists/>
        <button onClick = {this.mudaCondicaoExibicaoPLaylists}>Exibir/Esconder Todas as Playlists</button>
        {mostrarPlaylists}
      </div>
    ); 
  }
  
}
