import React from "react";

import Home from "./Home"
import Recall from "./Recall";

const deck1 = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript."
    },
    {
        question: "O React é ______.",
        answer: "Uma biblioteca JavaSript para construção de interfaces."
    },
    {
        question: "Componentes devem iniciar com ______.",
        answer: "Letra maiúscula."
    },
    {
        question: "Podemos colocar ______ dentro do JSX.",
        answer: "Expressões."
    },
    {
        question: "O ReactDOM nos ajuda ______.",
        answer: "Interagindo com o DOM para colocar componentes React na mesma."
    },
    {
        question: "Usamos o npm para ______.",
        answer: "Gerenciar os pacotes necessários e suas dependências."
    },
    {
        question: "Usamos props para ______.",
        answer: "Passar diferentes informações para componentes."
    },
    {
        question: "Usamos estado (state) para ______.",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."
    }
];

export default function App () {

    const [page, setPage] = React.useState("home")

    function shuffleDeck (deck) {
        let aux = deck.map(card => ({...card, recall: "none"}));
        aux.sort(() => Math.random() - 0.5);
        return aux;
    }

    switch (page) {
        case "home":
            return (<Home changePage={setPage} />);
        case "recall":
            return (<Recall changePage={setPage} deck={shuffleDeck(deck1)} />);
        default:
            return (
                <div className="error">
                    Houve um erro!
                </div>
            );
    }
}