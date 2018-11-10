import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-grey">Sign Up</h3>
                    <p className="subtitle has-text-grey">Please fill form to proceed.</p>
                    <div className="box">
                        <form>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="text" placeholder="Your Name" autoFocus/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="email" placeholder="Your Email" />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="password" placeholder="Your Password"/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="password" placeholder="Confirm Password"/>
                                </div>
                            </div>

                            <button className="button is-block is-info is-large is-fullwidth">Sign Up</button>
                        </form>
                    </div>
                    <p className="has-text-grey">
                        <Link to="/login">Log In</Link> &nbsp;·&nbsp;
                        <Link to="/forgotpassword">Forgot Password</Link> &nbsp;·&nbsp;
                        <Link to="/help">Need Help?</Link>
                    </p>
                </div>
            </div>
        </div>
    </section>)
    }
}
export default SignUp;