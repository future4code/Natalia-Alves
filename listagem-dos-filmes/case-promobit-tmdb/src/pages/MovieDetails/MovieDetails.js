import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ReactPlayer from 'react-player/youtube';
import imgNotFound from "../../assets/imgNotFound.jpg"
import { getTrailer, getActors, getMovieDetails, getRecomendations } from "../../services/getInfosAPI";
import { 
  ContentMedia, 
  InformationContainer, 
  MovieDescription, 
  Date,
  Synopsis,
  PublicVote,
  Title,
  CastInformation,
  CastCard,
  NameCast,
  NameCharacter,
  MovieTrailer,
  Recomendations,
} from "./styled";



function MovieDetails() {
    
  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState ([])
  const [details, setDetails] = useState ([])
  const [recomendations, setRecomendations] = ([])

  const { id } = useParams ()

  useEffect (() => {
    getMovieDetails(id, setMovie)
  }, [id])

  useEffect (() => {
    getActors (id, setCast)
  }, [id])
  
  useEffect (() => {
    getTrailer(id, setDetails)
  }, [id])

  useEffect (() => {
    getRecomendations(id, setRecomendations)
  }, [id])

  const {videos} = details

  const MovieDetails = movie &&
  <InformationContainer>
    {movie.poster_path && <img alt="poster do filme" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
    <MovieDescription>
     <h2>{movie.title && movie.title}({movie.release_date && movie.release_date.split('-',1).reverse().join('-')})</h2>
      <Date>
        <p>{movie.release_date && movie.release_date.split('-').reverse().join('/')} (BR) • </p>
           {movie.genres && movie.genres.map((genre) => {
            return <p>{genre.name && genre.name.replace('', ', ')}</p>})}
            <p> • {movie.runtime && movie.runtime + ' min'}</p>
      </Date>
      <PublicVote>
      <div>
      <p>{movie.vote_average && movie.vote_average * 10}%</p>
      </div>
      <p> Avaliação dos usuários</p>
      </PublicVote>
      <Synopsis>
        <h3>Sinopse</h3>
        <p>{movie.overview && movie.overview}</p>
      </Synopsis>
     </MovieDescription>
  </InformationContainer>


  return (
    <div>
      <Header/>
      {MovieDetails}
      <ContentMedia>
        <Title>
          Elenco:
        </Title>
        <CastInformation>
        {cast.map(cast => (
          <CastCard key={cast.id}>
          <img src={cast.profile_path === null ? imgNotFound : `https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
          <NameCast>{cast.name}</NameCast>
          <NameCharacter>{cast.character}</NameCharacter>
          </CastCard>
          ))}
        </CastInformation>
        <Title>
          Trailer:
        </Title>
        <MovieTrailer>
        {videos && videos.results.length ? (
          <ReactPlayer 
            width='100%' 
            height='100%' 
            url={`https://www.youtube.com/watch?v=${videos ? videos.results[0].key : ""}`} 
            controls={true} />
            ) : (
            <>
            <img src={imgNotFound} alt="imgNotFound"/>
            </>
        )}
        </MovieTrailer>
        <Recomendations>
            
        </Recomendations>
      </ContentMedia>
    </div>
    );
}
  
export default MovieDetails;