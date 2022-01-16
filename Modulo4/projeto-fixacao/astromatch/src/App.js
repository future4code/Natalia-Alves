import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CardsPerfil from './components/CardsPerfil/CardsPerfil';
import Header from './components/Header/Header';
import Mensagens from './components/Mensagens/Mensagens'

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 25vw;
  height: 96vh;
`

function App() {

  const [currentPage, setCurrentPage] = useState('CardsPerfil')

  const renderCurrentPage = () => {
    if (currentPage === 'CardsPerfil') {
      return <CardsPerfil/>
    } else if (currentPage === 'Mensagens') {
      return <Mensagens/>
    }
  }

  const changePage = (currentPage) => {
    setCurrentPage(currentPage)
  }

  return (
    <ContainerApp>
    <Container>
      <Header changePage={changePage} />
      {renderCurrentPage()}
    </Container>
    </ContainerApp>
 
  );
}

export default App;
