import React from 'react';
import theme from './constants/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter} from 'react-router-dom';
import Router from './routes/Router';


function App() {

  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
