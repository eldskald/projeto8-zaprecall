import Logo from "../assets/images/logo.png";
import "../assets/styles/home.css";

export default function Home ({changePage, selectDeck}) {

    return (
        <main className="home">
            <img src={Logo} alt="ZapRecall" />
            <h1>ZapRecall</h1>
            <select name="decks">
                <option defaultValue={""} className="select-placeholder">Escolha seu deck...</option>
                <option value="react" onClick={() => selectDeck(0)}>React</option>
                <option value="linux" onClick={() => selectDeck(1)}>Linux</option>
            </select>
            <button onClick={() => changePage("recall")}>Iniciar Recall!</button>
        </main>
    );
}
