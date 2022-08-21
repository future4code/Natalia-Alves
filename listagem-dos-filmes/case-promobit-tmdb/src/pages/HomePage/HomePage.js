import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "../../components/Header/Header";
import { goMovieDetails } from "../../routes/Coordinator";
import { getMovieGenres, getMovies } from "../../services/getInfosAPI";
import MovieGenre from "../../components/Genre/Genre";
import MovieCard from "../../components/MovieCard/MovieCard"
import { 
    BodyContainer, 
    GenreCarroussel,
    MovieCardsContainer, 
    DescriptionContainer, 
    ButtonsContainer
} from "./styled"

function HomePage() {
    const [moviesList, setMoviesList] = useState ([])
    const [movieGenres, setMovieGenres] = useState ([])
    const navigate = useNavigate ()

    useEffect(() => {
        getMovies (setMoviesList)
    },[])

    useEffect (() => {
        getMovieGenres (setMovieGenres)
    },[])

    const onClickCard = (id) => {
        goMovieDetails (navigate, id)
    }

    const genreListed = movieGenres && movieGenres.map ((genre) => {
        return <MovieGenre
        key = {genre.id}
        id = {genre.id}
        name = {genre.name}>
        </MovieGenre>
    })


    const movieListed = moviesList && moviesList.map ((movie) => {
        return <MovieCard
        key = {movie.id}
        poster_path = {movie.poster_path}
        title = {movie.title}
        release_date = {movie.release_date}
        onClickCard = {() => onClickCard(movie.id)}>
        </MovieCard>
    })

    // const movieListedFiltered = moviesList.filter ((genre, movie) => {
    //     if (genre.id === movie.genres_id){
    //         return (<MovieCard
    //         key = {movie.id}
    //         poster_path = {movie.poster_path}
    //         title = {movie.title}
    //         release_date = {movie.release_date}
    //         onClickCard = {() => onClickCard(movie.id)}>
    //         </MovieCard>)
    //     }
    // })

    return (
      <div>
        <BodyContainer>
        <Header/>
        <GenreCarroussel>
            <DescriptionContainer>
                <h3>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h3>
                <p>GÊNERO:</p>
            </DescriptionContainer>
            <ButtonsContainer>{genreListed}</ButtonsContainer>
        </GenreCarroussel>
        <MovieCardsContainer>{movieListed}</MovieCardsContainer>
        </BodyContainer>
        
      </div>
    );
  }
  
export default HomePage;