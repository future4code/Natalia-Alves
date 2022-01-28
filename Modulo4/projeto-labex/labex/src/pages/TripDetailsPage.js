import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TripDetailsPageHeader = styled.header`
    width:100vw;
    height:18vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-bottom: silver solid 1px;
        button{
            display: flex;
            width: 200px;
            height: 20px;
            margin-left: auto;
            margin-top: 1em;
            display: block;
            margin-right: 5px;
        }
`

function TripDetailsPage(){

    return(
    <div>
        <TripDetailsPageHeader>
            <button>LOGOUT</button>
        </TripDetailsPageHeader>

    </div>
    )

}

export default TripDetailsPage;