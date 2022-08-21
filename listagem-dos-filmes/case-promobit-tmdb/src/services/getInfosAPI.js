import axios from "axios";
import { BASE_URL, BASE_GENRE_URL } from "../constants/base_url";
import { API_KEY } from "../constants/api_key"

export const getMovies = (setMoviesList) => {
    axios.get (`${BASE_URL}popular?${API_KEY}&language=pt-BR`)
    .then((res) => {
        setMoviesList(res.data.results)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const getMovieGenres = (setMovieGenres) => {
    axios.get(`${BASE_GENRE_URL}list?${API_KEY}&language=pt-BR`)
    .then((res) => {
        setMovieGenres(res.data.genres)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const getMovieDetais = (id, setMovie) => {
    axios.get(`${BASE_URL}${id}?${API_KEY}&language=pt-BR`)
    .then((res) => {
        setMovie(res.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const getActors = (id, setCast) => {
    axios.get(`${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`)
    .then((res) => {
        setCast(res.data.cast)
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const getTrailer = (id, setMovieDetais) => {
    axios.get(`${BASE_URL}${id}?${API_KEY}&append_to_response=videos&language=pt-BR`)
    .then((res) => {
        setMovieDetais(res.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}