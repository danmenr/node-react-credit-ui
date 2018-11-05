import React from "react"
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar"

import "bulma/bulma.sass";

const App = () => {
    return (
        <div className="container is-fluid">
            <NavBar />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("app"))