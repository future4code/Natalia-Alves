import React from "react";


export default class CriarPlaylist extends React.Component {
    render(){
      return (
        <div>
          <input type="text" placeholder="Nome da Playlist"/>
          <button>Criar Playlist</button>
        </div>
      ); 
    }
    
  }