/* eslint-disable */

export const goHomePage = (navigate) => {
    navigate("/")
}

export const goMovieDetails = (navigate, id) => {
    navigate(`/movie/${ id }`)
} 