import React from "react";
import { ImageContainer, MovieCardContainer, MovieTitle } from "./styled"

function MovieCard (props) {
    const { poster_path, title, release_date, onClickCard } = props

    return (
        <MovieCardContainer>
            <ImageContainer
            src = {`https://image.tmdb.org/t/p/w500${poster_path}`}
            onClick ={ onClickCard}
            >
            </ImageContainer>
            <MovieTitle>
                <div>
                    <b>{title.toUpperCase()}</b> 
                </div>
                <div>
                    {release_date.split('-').reverse().join('-')}
                </div>
            </MovieTitle>
        </MovieCardContainer>
    )
} 

export default MovieCard