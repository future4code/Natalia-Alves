import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export default class App extends React.Component {

  render(){
    return(
      <div>
        {this.mostrarProximaPagina()}
        <button onClick ={this.passarParaProximaEtapa}>Proxima Etapa</button>
      </div>
    );
  }

  state = {
    etapa: 1,
  }

  passarParaProximaEtapa = () => {
   this.setState ({etapa: this.state.etapa + 1})
  }

  mostrarProximaPagina = () => {
    switch (this.state.event) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3:
        return <Etapa3/>;
      case 4: 
        return <Final/>
      break;
      default:
        return <Etapa1/>;
    }
  }


}
