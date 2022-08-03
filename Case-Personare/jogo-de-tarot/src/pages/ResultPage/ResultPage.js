import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { 
Container,
Heading,
Box
} from "@chakra-ui/react";



export default function ResultPage (){

    return(
        <Container >
        <Box>
        <Container >
        <Box  bg='#2A4365'  h='80px' p={4} color='white'>
        <Heading  fontSize='50px' noOfLines={1}  >
            JOGO DE TAROT - INTERPRETAÇÕES DO AMOR
        </Heading>
        </Box>
        </Container>    
        </Box>
        </Container>
    )
}