import React from "react";

import Home from "./Home"
import Recall from "./Recall";

export default function App () {

    const [page, setPage] = React.useState("home")

    switch (page) {
        case "home":
            return (<Home changePage={setPage} />);
        case "recall":
            return (<Recall changePage={setPage} />);
        default:
            return (
                <div className="error">
                    Houve um erro!
                </div>
            );
    }
}