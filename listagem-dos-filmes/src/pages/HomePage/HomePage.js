import {React, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import { 
    Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { BASE_GENRE_URL, BASE_URL } from "../../constants/base_url";
import { API_KEY } from "../../constants/api_key";


function HomePage(){

    const [listMovies, setListMovies] = useState([]);
    const [genre, setGenre] = useState ([]);
    const [load, setLoad] = useState(true);
    let navigate = useNavigate();

    const getMovies = () => {
       axios.get(`${BASE_URL}popular?${API_KEY}&language=pt-BR`) 
       .then ((res) => {
           setListMovies (res.data.results)
       })
       .catch((err) => {
        console.log(err.message)
    })

    };

    const getGenreMovies = () => {
        axios.get(`${BASE_GENRE_URL}list?${API_KEY}&language=pt-BR`)
        .then ((res) => {
            setGenre(res.data.genres);
        })
        .catch((err) => {
            console.log(err.message)
        })
    };

    useEffect(() => {
        getMovies();
    }, []);

    useEffect (() =>{
        getGenreMovies();
    }, []);

    const GetFilmsMap = listMovies.map ((results) => {
        return (
            <div key={results.id}>
            poster_path={results.poster_path}
            original_title={results.original_title}
            release_date={results.release_date}
            onClick={() => onClickCard(results.id)}
            </div>
        )
    })    
    const onClickCard = (id) => {
        navigate ("/filmdetails/{id}")
    };

    // const renderedActionMovies = filterMovies.map((results) => {
    //     if (results.genres.name === "Action") {
    //       return (
    //         <MovieCard
    //           key={results.id}
    //           poster_path={results.poster_path}
    //           title={results.title}
    //           release_date={results.release_date}
    //           onClick={() => onClickCard(results.id)}
    //         ></MovieCard>
    //       );
    //     }
    // });


    return (
    <Grid templateRows="0fr 0fr 2fr 1fr" maxH="100vh" h="100vh">
      <GridItem h={'44px'}>
        <Center>
          <Heading
            as="h3"
            size={"16px"}
            boxShadow={'0 0.5px 0 0 rgba(0, 0, 0, 0.25);'}
            w={'100vw'}
            h="44px"
            textAlign={"center"}
            marginBottom="8px"
            mt="13px"
          >
            TMDB
          </Heading>
        </Center>
      </GridItem>
       <Box overflowY={'scroll'} mb={'8px'}>
        <GridItem>
          <Center>
            <Tabs>
              <Center>
                <TabList overflowX={"scroll"} overflowY={"hidden"} w="100vw">
                  <Tab _selected={{ color: "#e86e5a" }}>Todos os Filmes</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Ação</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Aventura</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Animação</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Comédia</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Crime</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Documentário</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Drama</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Família</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Fantasia</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>História</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Terror</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Música</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Mistério</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Romance</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Ficção Cientifica</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Cinema TV</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Thriller</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Guerra</Tab>
                  <Tab _selected={{ color: "#e86e5a" }}>Faroeste</Tab>
                </TabList>
              </Center>

              {/* {load ? (
                <Center>
                  <Spinner size="xl" marginTop="20px" />
                </Center>
              ) : (
                   <TabPanels overflowY={"scroll"} h="60vh">
                   <TabPanel>{renderedActionMovies}</TabPanel> 
                   <TabPanel>{renderedAdventureMovies}</TabPanel>
                  <TabPanel>{renderedAnimationMovies}</TabPanel>
                  <TabPanel>{renderedComedyMovies}</TabPanel>
                  <TabPanel>{renderedCrimeMovies}</TabPanel>
                  <TabPanel>{renderedDocumentaryMovies}</TabPanel>
                  <TabPanel>{renderedDramaMovies}</TabPanel>
                  <TabPanel>{renderedFamilyMovies}</TabPanel>
                  <TabPanel>{renderedFantasyMovies}</TabPanel>
                  <TabPanel>{renderedHistoryMovies}</TabPanel>
                  <TabPanel>{renderedTerrorMovies}</TabPanel>
                  <TabPanel>{renderedMusicMovies}</TabPanel>
                  <TabPanel>{renderedMisteryMovies}</TabPanel>
                  <TabPanel>{renderedRomanceMovies}</TabPanel>
                  <TabPanel>{renderedScienceFictionMovies}</TabPanel>
                  <TabPanel>{renderedCinemaTVMovies}</TabPanel>
                  <TabPanel>{renderedThrillerMovies}</TabPanel>
                  <TabPanel>{renderedWarMovies}</TabPanel>
                  <TabPanel>{renderedWesternMovies}</TabPanel>
                 </TabPanels>
              )} */}
            </Tabs>
          </Center>
        </GridItem>
      </Box>
      <Center>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          shadow={"lg"}
          borderWidth="1px"
          w={"100vw"}
          align="center"
          justifyItems={'center'}
          position={"fixed"}
          bottom={'27%'}
          h={'49px'}
          bg={'#fff'}
        >
        {GetFilmsMap}
        </Grid>
      </Center>
    </Grid>
    )
}

export default HomePage;