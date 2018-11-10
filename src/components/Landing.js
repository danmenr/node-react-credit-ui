import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";

class Landing extends React.Component {
  render () {
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img
                    src="http://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item">
                    <Link className="button is-primary" to="/signup">
                      <span className="icon">
                        <i className="fa fa-home" />
                      </span>
                      <span>Sign Up</span>
                    </Link>
                  </span>

                  <span className="navbar-item">
                    <Link className="button is-info" to="/login">
                      <span className="icon">
                        <i className="fa fa-book" />
                      </span>
                      <span>Log In</span>
                    </Link>
                  </span>

                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">My Credit</h1>
              <h2 className="subtitle">
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
