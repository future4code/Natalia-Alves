import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ResultPage from './pages/ResultPage/ResultPage';
import theme from './constants/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'


function App() {

  return (
    <ChakraProvider theme={theme}>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/readings" element={<ResultPage />} />

        </Routes>
      </div>
    </Router>
    </ChakraProvider>
  );
}

export default App;
