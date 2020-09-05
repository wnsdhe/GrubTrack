import React from "react";
import { useEffect } from 'react';
import './style.scss'

function burger_menu() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      if (!el.classList.contains('is-active'))
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
          $target.classList.toggle('mobile-menu');
        });
    });
  }
}

let Login = () => {
  useEffect(() => {
    burger_menu();
  })

  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href="https://www.wundergrubs.com/" className="navbar-item">
                <img className="wunderlogo image" src="https://www.wundergrubs.com/uploads/7/3/8/6/73866685/editor/wg-newlogo-2020.jpg?1593719609" alt="Logo"></img>
              </a>
              <a role="button" className="navbar-burger" data-target="navbarMenuHeroC" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active" href="#/home">
                  Home
            </a>
                  <a className="navbar-item" href="#/login">
                    <span>Login</span>
                  </a>
                  <a className="navbar-item" href="#/register">
                    <span>Register</span>
                  </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 class="title has-text-white">Login</h3>
          <hr class="login-hr"></hr>
          <div class="box">
            <div class="box">
              <img src="https://www.wundergrubs.com/uploads/7/3/8/6/73866685/published/weebly-logo.jpg?1590335139" alt=""></img>
            </div>
            <div class="title has-text-grey is-5">Please enter your email and password.</div>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Email" autofocus=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Password"></input>
                </div>
              </div>
              <button class="button is-block is-danger is-large is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">

          </div>
        </nav>
      </div>
    </section>
  );
};

export default Login;