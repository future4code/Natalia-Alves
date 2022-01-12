import React, {UseState , UseEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CardsPerfil from './components/CardsPerfil/CardsPerfil';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;


`

function App() {
  return (
    <Container>
     <CardsPerfil/>
    </Container>
  );
}

export default App;
