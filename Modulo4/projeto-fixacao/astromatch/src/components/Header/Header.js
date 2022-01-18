import React, {UseEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'


const ContainerCabecalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30vw;
    border-bottom: silver solid 1px ;


    button{
        width: 2.5vw;
        height: 3vh;
        border: none;
        cursor: pointer;
        background-color: white;
    }

`
const Imagem = styled.img`
    width: 9vw;
    margin: 5px;
`
const Cabecas = styled.img`
    width: 2.5vw;
`
const Foguinho = styled.img`
    width: 2.5vw;
`


function Header(props) {


    
    return (
      <ContainerCabecalho>
          <div>
            <button onClick={() => props.changePage('CardsPerfil')}><Foguinho src = "./img/tinder.png"/></button>
          </div>
          <div>
              <Imagem src = "./img/astrologo.jpeg"/>
          </div>
          <div>
            <button onClick={() => props.changePage('Mensagens')}><Cabecas src="./img/cabecas.jpeg"/></button>
          </div>
      </ContainerCabecalho>
    );
  }
  
  export default Header;