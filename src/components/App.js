import React from "react";

import Home from "./Home"

export default function App () {

    const [page, setPage] = React.useState("home")

    if (page === "home") {
        return (
            <Home />
        );
    }

    return (
        <div>
            <h1>AAAAAAAAAA</h1>
            <h2>BBBBBBBB</h2>
        </div>
    );
}