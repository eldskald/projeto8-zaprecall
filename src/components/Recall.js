import React from "react";
import Card from "./Card";
import Results from "./Results";

import "../assets/styles/recall.css";
import Logo from "../assets/images/logo-pequeno.png";

export default function Recall ({changePage, deck}) {

    const [cards, setCards] = React.useState(deck);
    const [recalls, setRecalls] = React.useState([]);

    return (
        <>
            <header className="recall-header" onClick={() => changePage("home")}>
                <img src={Logo} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </header>
            <main className="deck-container">
                {cards.map((card, index) => (<Card
                    key={index}
                    index={index}
                    question={card.question}
                    answer={card.answer}
                    cards={cards}
                    setCards={setCards}
                    recalls={recalls}
                    setRecalls={setRecalls}
                />))}
            </main>
            <Results cards={cards} recalls={recalls} changePage={changePage} />
        </>
    );
}