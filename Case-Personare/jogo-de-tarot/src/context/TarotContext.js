import React, { useState, createContext} from "react";

const TarotContext = createContext ();
export default TarotContext;

export function TarotProvider ({children}) {
    const [startGame, setStartGame] = useState (false);
    const [card, setCard] = useState ([]);
    const [cardUrl, setCardUrl] = useState ("");
    const [backCard, setBackCard] = useState("");
    // const [selectedCardId, setSelectedCardId] = useState(null);

    const value {
        startGame,
        setStartGame,
        card,
        setCard,
        cardUrl,
        setCardUrl,
        backCard,
        setBackCard,
    }

    return(
        <TarotContext.Provider value={value}>
            {children}
        </TarotContext.Provider>
    )
}


