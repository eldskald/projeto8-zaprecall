import React from "react";
import Card from "./Card";

import "../assets/styles/recall.css";
import Logo from "../assets/images/logo-pequeno.png";

export default function Recall ({changePage, deck}) {

    const [cards, setCards] = React.useState(deck);
    
    const [recalls, setRecalls] = React.useState([]);
    function recallSigns (recall) {
        switch (recall) {
            case "wrong":
                return (
                    <ion-icon name="close-circle" style={{color: "var(--red)"}}></ion-icon>
                );
            case "right":
                return (
                    <ion-icon name="help-circle" style={{color: "var(--orange)"}}></ion-icon>
                );
            case "zap":
                return (
                    <ion-icon name="checkmark-circle" style={{color: "var(--green)"}}></ion-icon>
                );
            default:
                return (<></>);
        }
    }

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
            <footer className="recall-footer">
                <p>{recalls.length}/{cards.length} CONCLUÍDOS</p>
                {recalls.length > 0 ?
                    <div>
                        {recalls.map(recall => recallSigns(recall))}
                    </div>
                :
                    <></>
                }
            </footer>
        </>
    );
}