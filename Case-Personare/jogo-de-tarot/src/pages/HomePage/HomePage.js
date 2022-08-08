import React, { useState,  useContext, useEffect } from "react";
import tarotJson from "../../Assets/tarot.json";
import { useNavigate } from "react-router-dom";
import {
Heading,
Box,
Flex,
Grid,
Button,
Modal,
ModalOverlay,
ModalContent,
ModalFooter,
ModalBody,
ModalCloseButton,
useDisclosure,
} from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { goResultPage } from "../../routes/Coordinator";


export default function HomePage() {
 

  const [startGame, setStartGame] = useState (false);
  const [deck, setDeck] = useState (newDeck);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

    function newDeck() {
    const deckArray = [];
    tarotJson.cards.forEach((card) => {
      deckArray.push({
        name: card.name,
        cardFront: tarotJson.imagesUrl + card.image,
        cardBack: tarotJson.imageBackCard,
        isTurnedFront: true,
      });
    });
    return deckArray;
  }

  function hideDeck() {
    let deckArray = [...deck];
    deckArray.forEach((card) => {
      card.isTurnedFront = false;
    });
    return deckArray;
  }

  function chooseCard(name) {
    let deckArray = [...deck];
    const cardIndex = deckArray.findIndex((card) => {
      return card.name === name;
    });
    deckArray[cardIndex].isTurnedFront = !deckArray[cardIndex].isTurnedFront;

    return deckArray;
  }

  function shuffleDeck() {
    let deckArray = hideDeck();
    let j = 0;
    let momentary;
    for (let i = 0; i < deckArray.length; i++) {
      j = Math.floor(Math.random() * (i + 1));
      momentary = deckArray[i];
      deckArray[i] = deckArray[j];
      deckArray[j] = momentary;
    }
    return deckArray;
  }

  function startReading() {
    setDeck(shuffleDeck());
    setStartGame(true);
  }

  function goToCardReading(name) {
    if (startGame === true) {
      setDeck(chooseCard(name));
      setTimeout(() => {
        goResultPage(navigate, name);
      }, 1000);
      setStartGame(false);
    }
  }

  const renderedCards = deck.map((card) => {
    return (
      <Card
        key={card.name}
        imageUrl={card.isTurnedFront ? card.cardFront : card.cardBack}
        title={card.name}
        onClick={() => goToCardReading(card.name)}
      ></Card>
    );
  });

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody fontSize="14px" bgColor="CaptionText">
            As cartas foram embaralhadas! Para realizar uma leitura, escolha uma
            carta.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="285E61" mr={3} onClick={onClose} bgColor="CaptionText">
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        w="100%"
        alignItems={"center"}
        flexDirection={"row"}
        alignContent={"space-between"}
        justifyContent={"space-around"}
        bg={"#2A4365"}
        p={"10px"}
        zIndex={2}
      >
        <Box h="80px" p={4} >
          <Heading fontSize="30px" noOfLines={1}>
            JOGO DE TAROT - INTERPRETAÇÕES DO AMOR
            <Button padding={6} marginLeft={10} bgColor="CaptionText" onClick={() => onOpen(startReading())}>
              Realizar Leitura
            </Button>
          </Heading>
        </Box>
      </Flex>
      <Flex pt="100px" align={"center"} justify={"center"}>
        <Grid
          templateColumns={["repeat(6, 1fr)"]}
          gap={2}
          align={"center"}
          m={["13px"]}
        >
          {renderedCards}
        </Grid>
      </Flex>
    </div>
  );
}
