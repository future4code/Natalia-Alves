import styled from "styled-components";

export const InformationContainer = styled.div`
    display: flex ;
    background-color: #2D0C5E;
    color: #ffffff;
    height: 58vh;
    padding:3% ;
    img{
        border-radius: 2% ;
        margin-left: 2.5% ;
        height: 78vh;
    }
`

export const Date = styled.div`
    display: flex;
    align-items: center;

`
export const MovieDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    p{
        font-size: 120% ;
    }
`

export const Synopsis = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        font-size: 80% ;
        text-align: justify;
    }
`

export const PublicVote = styled.div`
    display: flex;
    
    div{
    margin-right: 10px;
    }
`

export const ContentMedia = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% ;
    @media (max-width: 30%) {
        margin: 1%;
    }
`

export const Title = styled.h1`
    margin-top: 15%;
    font-size: 130%;
`

export const CastInformation = styled.div`
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    gap: 1%;
`;

export const CastCard = styled.div`
    margin-bottom: 1%;
    margin-left: 0.1%;
    padding: .5%;
    white-space: normal;
    border-radius: 0.25%;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    img {
        width: 11vw;
    }
`;

export const NameCast = styled.h1`
    margin-top: 3%;
    font-size: 100%;
    font-weight: 700;
`;
export const NameCharacter = styled.p`
    margin-top: 2%;
    font-size: 90%;
    font-weight: 400;
`;

export const MovieTrailer = styled.div`
    margin-top: 1.5%;
    width: 60vw;
    height: 80vh;
    img {
        width: 90%;
    }
    @media (max-width: 900px) {
        width: auto;
        height: 300px;
    }
    @media (max-width: 800px) {
        width: auto;
        height: 300px;
    }
`
export const Recomendations = styled.div`
    
`