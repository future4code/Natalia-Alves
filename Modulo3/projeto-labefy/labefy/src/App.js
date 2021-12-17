import React from "react";
import CriarPlaylist from "./Criar Playlist/CriarPlaylist";
import AdicionarMusica from "./Adicionar Musica/AdicionarMusica";

export default class App extends React.Component {
  render(){
    return (
      <div>
        <CriarPlaylist/>

        <AdicionarMusica>

        </AdicionarMusica>
      </div>
    ); 
  }
  
}
