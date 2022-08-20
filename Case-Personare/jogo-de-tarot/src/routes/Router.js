import React from 'react'
import { Routes , Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ResultPage from '../pages/ResultPage/ResultPage'

const Router = () =>{

    return(
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/card/:name" element={<ResultPage/>} />
        </Routes>
    )

}

export default Router
