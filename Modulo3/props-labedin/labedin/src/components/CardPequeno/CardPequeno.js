import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <h4>{ props.nome }</h4>
        </div>
    )
}

export default CardPequeno;