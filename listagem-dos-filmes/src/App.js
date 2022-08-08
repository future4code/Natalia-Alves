import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './constants/GlobalStyle';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import FilmDetails from './pages/FilmDetails/FilmDetails';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <div>
      <Routes>

        <Route exact path= '/' element={<HomePage/>}/>

        <Route exact path= '/filmdetails/{id}' element={<FilmDetails/>}/>

      </Routes>
      </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
