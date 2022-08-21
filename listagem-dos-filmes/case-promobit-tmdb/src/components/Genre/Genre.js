import React from "react";
import { GenreButton } from "./styled";

function MovieGenre (props) {

    const { name } = props

    return(
        <GenreButton>{ name }</GenreButton>
    )
}

export default MovieGenre