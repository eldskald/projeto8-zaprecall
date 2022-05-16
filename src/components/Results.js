import React from "react";

import "../assets/styles/results.css";

export default function Results ({cards, recalls, changePage}) {

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

    function finalResults () {
        for (let i = 0; i < recalls.length; i++) {
            if (recalls[i] === "wrong") {
                return (
                    <div className="final-results">
                        <h1>😢 Putz...</h1>
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                    </div>
                );
            }
        }
        return (
            <div className="final-results">
                <h1>🥳 Parabéns!</h1>
                <p>Você não esqueceu de</p>
                <p>nenhum flashcard!</p>
            </div>
        );
    }
    
    if (recalls.length === 0) {
        return (
            <footer className="recall-footer">
                <p>{recalls.length}/{cards.length} CONCLUÍDOS</p>
            </footer>
        );
    } else if (recalls.length < cards.length) {
        return (
            <footer className="recall-footer">
                <p>{recalls.length}/{cards.length} CONCLUÍDOS</p>
                <div>
                    {recalls.map(recall => recallSigns(recall))}
                </div>
            </footer>
        );
    } else {
        return (
            <footer className="recall-footer long">
                {finalResults()}
                <p>{recalls.length}/{cards.length} CONCLUÍDOS</p>
                <div>
                    {recalls.map(recall => recallSigns(recall))}
                </div>
                <button onClick={() => changePage("home")}>REINICIAR RECALL</button>
            </footer>
        );
    }
}