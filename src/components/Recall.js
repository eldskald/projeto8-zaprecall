import React from "react";

import "../assets/styles/recall.css";
import Logo from "../assets/images/logo-pequeno.png";

export default function Recall ({changePage}) {
    return (
        <>
            <header className="recall-header" onClick={() => changePage("home")}>
                <img src={Logo} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </header>
            <footer className="recall-footer">
                <p>0/4 CONCLUÍDOS</p>
                <div>
                    <ion-icon name="close-circle" style={{color: "var(--red)"}}></ion-icon>
                    <ion-icon name="checkmark-circle" style={{color: "var(--green)"}}></ion-icon>
                    <ion-icon name="help-circle" style={{color: "var(--orange)"}}></ion-icon>
                </div>
            </footer>
        </>
    );
}