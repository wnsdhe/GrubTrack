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
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active" href="#/home">
                  Home
                </a>
                <a className="navbar-item is-active" href="#/shop">
                  Shop
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
        <div className="container has-text-centered ">
          <div class="box loginbox column is-three-fifths is-offset-one-fifth">
            <br></br>
            <div class="title is-1 is-family-sans-serif">Welcome to WunderTrack!</div>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-rounded" type="email" placeholder="Email" autofocus="" autoComplete></input>
                </div>
              </div>
              <br></br>
              <a class="is-pulled-right mb-1">Forget Password?</a>
              <div class="field">
                <div class="control">
                  <input class="input is-rounded" type="password" placeholder="Password" autoComplete></input>
                </div>
              </div>
              <br></br>
              <div class="columns ">
                <div class="column">
                  <input type="checkbox"></input> Remember me
                </div>
                <div class="column">
                  <input type="checkbox"></input> I agree to the <a href="#">terms and conditions</a>
                </div>

              </div>

              <br></br>
              <div class="buttons">
                <button class="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth">Login</button>
                <button class="regb button is-block is-danger is-outlined is-rounded is-medium column is-offset-one-fifth">Register</button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li class="is-active"><a>Login</a></li>
              <li><a>Register</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Login;