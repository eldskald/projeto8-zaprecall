import React from "react";

import Home from "./Home"
import Recall from "./Recall";

export default function App () {

    const decks = [
        [
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
        ],
        [
            {
                question: "Que comando deleta uma pasta?",
                answer: "rm -r [endereço]"
            },
            {
                question: "Que comando revela os arquivos/pastas ocultas?",
                answer: "ls -a"
            },
            {
                question: "Para onde vão os aplicativos instalados por algum gerenciador?",
                answer: "Pasta bin no root."
            },
            {
                question: "Como se configura um comando para o terminal?",
                answer: "Adicione uma linha alias no ~/.bashrc."
            },
            {
                question: "Que comando inicia uum repositório git?",
                answer: "git init"
            },
            {
                question: "Que comando retorna para um commit anterior em um repositório git?",
                answer: "git checkout [commit]"
            },
            {
                question: "Que comando cria um projeto React com create-react-app?",
                answer: "create-react-app [nome do projeto] --template [template opcional]"
            },
            {
                question: "Que comando abre o manual de um aplicativo?",
                answer: "man [nome do aplicativo]"
            }
        ]
    ];

    const [page, setPage] = React.useState("home");
    const [selectedDeck, setSelectedDeck] = React.useState(0);

    function shuffleDeck () {
        let aux = decks[selectedDeck].map(card => ({...card, recall: "none"}));
        aux.sort(() => Math.random() - 0.5);
        return aux;
    }

    switch (page) {
        case "home":
            return (<Home changePage={setPage} selectDeck={setSelectedDeck} />);
        case "recall":
            return (<Recall changePage={setPage} deck={shuffleDeck()} />);
        default:
            return (
                <div className="error">
                    Houve um erro!
                </div>
            );
    }
}