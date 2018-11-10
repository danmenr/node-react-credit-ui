import React from "react";
import { Link } from "react-router-dom";


const NavBar = props => 
<nav className="navbar" role="navigation" aria-label="main navigation">
<div className="navbar-brand">
  <a className="navbar-item" href="https://bulma.io">
    <h2>Credits</h2>
  </a>

  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarBasicExample" className="navbar-menu">
  <div className="navbar-start">
    <a className="navbar-item">
      Home
    </a>

    <a className="navbar-item">
      Documentation
    </a>
  </div>

  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">
        <a className="button is-primary">
          <strong>Sign up</strong>
        </a>
        <Link className="button is-light" to="/login">
          Log in
        </Link>
      </div>
    </div>
  </div>
</div>
</nav>
export default NavBar;