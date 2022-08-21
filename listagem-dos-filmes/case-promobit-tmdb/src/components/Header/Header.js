import React from "react";
import { useNavigate } from "react-router-dom";
import { SiteHeader } from "./styled";
import tmdbLogo from "../../assets/tmdb-logo.png"
import { goHomePage } from "../../routes/Coordinator";

function Header() {
    const navigate = useNavigate();


    return (
        <SiteHeader>
            <img src ={tmdbLogo} alt = 'logo TMDB'
            onClick={() => goHomePage(navigate)}/>
        </SiteHeader>
    );
  }
  
  export default Header;