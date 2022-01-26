import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HomeHeader = styled.header`
    width:100vw;
    height: 18vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: silver solid 1px ;
        button{
            display: flex;
            width: 200px;
            height: 20px;
            margin-left: auto;
            margin-top: 1em;
            display: block;
        }
`
const SiteBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    padding: 15vh;
        h2{
            display: flex;
            align-items: center;
            padding-top: 10vh;
            padding-left: 10vw;
            padding-right: 10vw;

        }
`

function HomePage(){

    return(
        <div>
            <HomeHeader>
                <button>ÁREA DO ADMINISTRADOR</button>
            </HomeHeader>
            <SiteBody>
                <h1>LABEX</h1>
                <button>VER VIAGENS</button>
                <h2>Temos viagens incríveis disponíveis, vá até a nossa lista de viagens disponíveis 
                    se inscreva em uma e aguarde nosso contato. Boa sorte!
                </h2>
            </SiteBody>
        </div>
    )
}

export default HomePage;