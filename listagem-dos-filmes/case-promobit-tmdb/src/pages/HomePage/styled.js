import styled from "styled-components";

export const BodyContainer = styled.div `
    display: flex ;
    flex-direction: column ;
`

export const GenreCarroussel = styled.div`
    padding-top: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #2D0C5E;
    color: #ffffff;
`
export const MovieCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 18%;
    margin: 3% 5%;
`

export const DescriptionContainer = styled.div`
    width: 47%;
    font-size: 27px;
    p{
    font-size: 14px;
    }
`

export const ButtonsContainer = styled.div`
    margin: 2%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 75%;

`