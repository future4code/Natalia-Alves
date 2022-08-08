/* eslint-disable */

export const goHomePage = (navigate) => {
    navigate("/")
}

export const goResultPage = (navigate, name) => {
    navigate(`/card/${ name }`)
}