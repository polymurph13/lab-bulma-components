import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from '../coolButton/CoolButton';

function Navbar() {
    return (

        <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <CoolButton isSmall isDanger>Login</CoolButton>
          </p>
          <p class="control">
            <CoolButton isSmall isDanger>Sign up</CoolButton>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

    );
}

export default Navbar;