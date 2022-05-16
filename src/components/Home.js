import Logo from "../assets/images/logo.png";
import "../assets/styles/home.css";

export default function Home ({changePage}) {
    return (
        <main className="home">
            <img src={Logo} alt="ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => changePage("recall")}>Iniciar Recall!</button>
        </main>
    );
}
