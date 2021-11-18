import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'huguinho'}
          fotoUsuario={'https://picsum.photos/id/1/50/50'}
          fotoPost={'https://picsum.photos/id/950/200/150'}
        />
        <Post
          nomeUsuario={'zezinho'}
          fotoUsuario={'https://picsum.photos/id/2/50/50'}
          fotoPost={'https://picsum.photos/id/635/200/150'}
        />
        <Post
          nomeUsuario={'luizinho'}
          fotoUsuario={'https://picsum.photos/id/3/50/50'}
          fotoPost={'https://picsum.photos/id/399/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
