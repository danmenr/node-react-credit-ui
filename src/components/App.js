import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Login";
import Landing from "./Landing";
import SignUp from "./SignUp";
import Help from "./Help";
import Main from "./Main";
import Credit from "./Credit";
import CreditList from "./CreditList";
import CreditDetail from "./CreditDetail";
import WithAuthentication from "./containers/WithAuthentication";
import WithToaster from "./containers/WithToaster";
import WithCredit from "./containers/WithCredit";
import WithCreditList from "./containers/WithCreditList";
import PrivateRoute from "routes/PrivateRoute";
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
                        <Route path="/main" component={Main} />
                        <Route path="/credit" component={WithCredit(Credit)} />
                        <Route path="/creditlist" component={WithCreditList(CreditList)} />
                        <Route path="/creditdetail" component={WithCreditPayments(CreditDetail)} />
                    </React.Fragment>
            </Router>
        </Provider>
    )
}

export default App;
