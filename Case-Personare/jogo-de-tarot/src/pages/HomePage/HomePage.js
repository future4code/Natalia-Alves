import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { 
Container,
Heading,
Box,
Flex
} from "@chakra-ui/react";


export default function HomePage (){

    return(
        <div>
        <Flex 
         w="100%"
         align={"center"}
         justify={"center"}
         bg={"#2A4365"}
         p={"10px"}
         pos="fixed"
         zIndex={2}>
        <Box h='80px' p={4} color='white'>
        <Heading fontSize='50px' noOfLines={1}  >
            JOGO DE TAROT - INTERPRETAÇÕES DO AMOR
        </Heading>
        </Box>   
        </Flex>
        </div>
    )
}