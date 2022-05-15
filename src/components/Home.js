import Logo from "../assets/images/logo.png";
import "../assets/styles/home.css";

export default function Home () {
    return (
        <main className="home">
            <img src={Logo} alt="ZapRecall" />
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
        </main>
    );
}
