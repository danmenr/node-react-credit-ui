import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return (  
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Sign Up</h3>
                    <p class="subtitle has-text-grey">Please fill form to proceed.</p>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Your Name" autofocus=""/>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" />
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password"/>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            
                            <button class="button is-block is-info is-large is-fullwidth">Sign Up</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <Link to="/login">Log In</Link> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>)
    }
}
export default SignUp;