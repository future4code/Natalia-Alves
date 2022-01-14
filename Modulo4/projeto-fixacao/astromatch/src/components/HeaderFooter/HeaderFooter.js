import React, {UseState , UseEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'


const ContainerCabecalho = styled.div`
    margin: 1vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25vw;
    border-bottom: silver solid 1px ;

    button{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }

`
const BoxImagem = styled.div`

`
const Imagem = styled.img`
    width: 9vw;
`
const Cabecas = styled.img`
    width: 2.5vw;
`
const Foguinho = styled.img`
    width: 3vw;
`


function PerfilUsuario() {

    const [mudaTela, setMudaTela] = useState(true)
    
    return (
      <ContainerCabecalho>
          <div>
            <Foguinho src = "./img/tinder.png"/>
          </div>
          <div>
              <Imagem src = "./img/astrologo.jpeg"/>
          </div>
          <div>
            <Cabecas src="./img/cabecas.jpeg"/>
          </div>
      </ContainerCabecalho>
    );
  }
  
  export default PerfilUsuario;