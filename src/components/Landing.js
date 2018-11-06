import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

class Landing extends React.Component {
  render () {
    return (
      <section class="hero is-info is-fullheight">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item" href="../">
                  <img
                    src="http://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <Link class="button is-primary" to="/signup">
                      <span class="icon">
                        <i class="fa fa-home" />
                      </span>
                      <span>Sign Up</span>
                    </Link>
                  </span>
                  
                  <span class="navbar-item">
                    <Link class="button is-info" to="/login">
                      <span class="icon">
                        <i class="fa fa-book" />
                      </span>
                      <span>Log In</span>
                    </Link>
                  </span>
                  
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="title">My Credit</h1>
              <h2 class="subtitle">
                This is the best software platform for register your credit balances.
              </h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Landing
