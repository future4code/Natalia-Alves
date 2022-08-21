import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Router = () =>{

    return(
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/movie/:id" element={<MovieDetails/>} />
            <Route element ={<PageNotFound/>}/>
        </Routes>
    )

}

export default Router