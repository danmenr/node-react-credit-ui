import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import SignUp from "./SignUp";
import NavBar from "./NavBar";

import "bulma/bulma.sass";

const App = () => {
    return (
        <Router>
           <React.Fragment>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </React.Fragment>
        </Router>
    )
}
export default App;