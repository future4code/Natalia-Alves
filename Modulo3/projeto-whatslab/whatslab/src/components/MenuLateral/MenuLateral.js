import React, { useState, useEffect } from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ListaDoChat from '../ListaDoChat/ListaDoChat';

import Perfil1 from './imagens/Perfil1.png'



function MenuLateral (props){

    const [listaDoChat, setChatList] = useState ([{}, {}, {}, {},{},{},{},{},{}]);
    
    return(
  
        <div>
        <header>
            <img className= "imagem-perfil" src={props.imagem} />
        <div className="botoes-header"> 
            <div className="bts-header">
                    <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className="bts-header">
                    <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className="bts-header">
                    <MoreVertIcon style={{color: '#919191'}} />
            </div>
            </div>
        </header>
        <div className="pesquisa">
            <div className="input-de-pesquisa">
                <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
        </div>
        <div className="lista-do-chat"> 
            {listaDoChat.map((item, key) =>
                <ListaDoChat
                    contato={Perfil1}
                    nome="Pedro"
                    hora="15:02"
                    ultimamensagem="eae men eae men eae meneae men eae men eae meneae men eae men eae men"
                />
            )}
        </div>
        
    
    </div>
    )
}

export default MenuLateral;