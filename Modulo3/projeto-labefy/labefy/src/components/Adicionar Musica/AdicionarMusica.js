import React from "react";

export default class AdicionarMusica extends React.Component {
    render(){
      return (
        <div>
          <input type="text" placeholder="Digite música e artista"/>
          <button>Adiciona</button>
        </div>
      ); 
    }
    
  }