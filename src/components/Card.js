import React from "react";

import "../assets/styles/card.css";
import Turn from "../assets/images/setinha.png";

export default function Card ({
        index,
        question,
        answer,
        cards,
        setCards,
        recalls,
        setRecalls
    }) {

    function updateRecalls (recall) {
        const aux = [...cards];
        aux[index].recall = recall;
        setCards([...aux]);
        setRecalls([...recalls, recall]);
        setState("done");
    }

    const [state, setState] = React.useState("unselected");

    switch (state) {
        case "unselected":
            return (
                <div className="card unselected clickable" onClick={() => setState("selected")}>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            );
        case "selected":
            return (
                <div className="card selected">
                    <p>{question}</p>
                    <img src={Turn} alt="Virar" onClick={() => setState("flipped")} />
                </div>
            );
        case "flipped":
            return (
                <div className="card selected">
                    <p>{answer}</p>
                    <div>
                        <button style={{backgroundColor: "var(--red)"}} onClick={() => updateRecalls("wrong")}>Não lembrei</button>
                        <button style={{backgroundColor: "var(--orange)"}} onClick={() => updateRecalls("right")}>Quase não lembrei</button>
                        <button style={{backgroundColor: "var(--green)"}} onClick={() => updateRecalls("zap")}>Zap!</button>
                    </div>
                </div>
            );
        case "done":
            switch (cards[index].recall) {
                case "wrong":
                    return (
                        <div className="card unselected">
                            <p className="strikethrough" style={{color: "var(--red)"}}>Pergunta {index + 1}</p>
                            <ion-icon name="close-circle" style={{color: "var(--red)"}}></ion-icon>
                        </div>
                    );
                case "right":
                    return (
                        <div className="card unselected">
                            <p className="strikethrough" style={{color: "var(--orange)"}}>Pergunta {index + 1}</p>
                            <ion-icon name="help-circle" style={{color: "var(--orange)"}}></ion-icon>
                        </div>
                    );
                case "zap":
                    return (
                        <div className="card unselected">
                            <p className="strikethrough" style={{color: "var(--green)"}}>Pergunta {index + 1}</p>
                            <ion-icon name="checkmark-circle" style={{color: "var(--green)"}}></ion-icon>
                        </div>
                    );
                default:
                    console.log(cards[index].recall);
                    return (
                        <div className="card unselected">
                            <p>{state} {cards[index].recall}</p>
                        </div>
                    );
            }
        default:
            return (
                <div className="card unselected">
                    <p>{state} {cards[index].recall}</p>
                </div>
            );
            
    }
}
