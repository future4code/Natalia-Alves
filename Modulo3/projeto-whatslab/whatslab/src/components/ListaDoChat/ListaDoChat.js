import React from 'react';
import './ListaDoChat.css';



function ListaDoChat (props){
    return(
        <div className="listaDoChat">
           <img className= "imagemPerfilContato" src={props.contato} />
           <div className="linhasDeChat">
               <div className="linhaDeChat">
                    <div className="nomeDoContato">
                        <h4>{props.nome}</h4>
                    </div>
                    <div className="horaDoChat">
                        <h4>{props.hora}</h4>
                    </div>
               </div>
               <div className="linhaDeChat">
                   <div className="ultimaMensagem">
                       <p>{props.ultimamensagem}</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default ListaDoChat;