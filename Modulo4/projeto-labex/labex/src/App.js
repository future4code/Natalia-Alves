import React from "react";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

export default function App() {
  return (
      <Router>
      <div>
      <Routes>

        <Route exact path={"/"} element={<HomePage/>}/>

        <Route exact path={"/listtrips"} element={<ListTripsPage/>}/>

        <Route exact path={"/applicationform"} element={<ApplicationFormPage/>}/>

        <Route exact path ={"/loginpage"} element={<LoginPage/>}/>

        <Route exact path ={"/adminhomepage"} element={<AdminHomePage/>}/>

        <Route exact path ={"/tripdetails"} element={<TripDetailsPage/>}/>

        <Route exact path ={"/createtrip"} element={<CreateTripPage/>}/>

      </Routes>
      </div>
      </Router>
  );
}
