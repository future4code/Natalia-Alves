import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
Container,
Heading,
Center,
Box
} from "@chakra-ui/react";

export default function Header (){

    return(
        <Container>
        <Center>
        <Box   bg='#2A4365' w='100%' h='100' p={4} color='white'>
        <Heading size='lg' fontSize='50px' noOfLines={1} margin='15' >
            JOGO DE TAROT - INTERPRETAÇÕES DO AMOR
        </Heading>
        </Box>
        </Center>
        </Container>            
    )
}
