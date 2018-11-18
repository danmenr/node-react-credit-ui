import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Login";
import Landing from "./Landing";
import SignUp from "./SignUp";
import Help from "./Help";
import WithAuthentication from "./containers/WithAuthentication";
import WithToaster from "./containers/WithToaster";
import store from "store";
import "bulma/bulma.sass";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                    <React.Fragment>
                        <Route exact path="/" component={WithToaster(Landing)} />
                        <Route path="/login" component={WithAuthentication(Login)} />
                        <Route path="/signup" component={WithAuthentication(SignUp)} />
                        <Route path="/forgotpassword" component={SignUp} />
                        <Route path="/help" component={Help} />
                    </React.Fragment>
            </Router>
        </Provider>
    )
}

export default App;
