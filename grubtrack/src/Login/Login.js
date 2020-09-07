import React from "react";
import { useEffect } from 'react';
import history from '../history';
import './Login.scss'

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
    <section className="hero is-fullheight ">
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
                <a className="navbar-item" href="https://www.wundergrubs.com/">
                  Home
                </a>
                <a className="navbar-item" href="https://www.wundergrubs.com/store/c1/Featured_Products.html">
                  Shop
                </a>
                <a className="navbar-item is-active" href="#/login">
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

      <div className="line"></div>

      <div className="hero-body">
        <div className="container is-fluid ">
          <div className="columns is-vcentered has-text-centered">
            <div className="column box wunderback has-text-centered">
              <img className="mt-5" alt="" src="https://www.wundergrubs.com/uploads/7/3/8/6/73866685/edited/homepage-taglinerevised_14.png"></img>
              <br></br>
              <div className="buttons is-grouped is-centered mt-3">
              <a className="shopb button mr-2 is-dark" href="https://www.wundergrubs.com/store/c1/Featured_Products.html">SHOP NOW</a>
              <a className="shopb button ml-1 is-dark" href="https://www.instagram.com/wundergrubs/">INSTAGRAM</a>
              </div>
            </div>
            <div className="column is-half">
            <div className="box loginbox column is-three-fifths is-offset-one-fifth">
            <br></br>
            <div className="title is-size-1-widescreen 	 is-family-sans-serif">Welcome to GrubTrack!</div>
            <form>
              <div className="field">
                <div className="control">
                  <input className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
                </div>
              </div>
              <br></br>
              <a className="is-pulled-right mb-1">Forget Password?</a>
              <div className="field">
                <div className="control">
                  <input className="input is-rounded" type="password" placeholder="Password" autoComplete="on"></input>
                </div>
              </div>
              <br></br>
              <div className="columns ">
                <div className="column">
                  <input type="checkbox"></input> Remember me
                </div>
                <div className="column">
                  <input type="checkbox"></input> I agree to the <a href="#">terms and conditions</a>
                </div>

              </div>

              <br></br>
              <div className="buttons">
                <button className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" onClick={() => {history.push('/layout')}}>Login</button>
                <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth">Register</button>
              </div>

            </form>
          </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="hero-foot">
        
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a href="https://www.wundergrubs.com/">Home</a></li>
              <li><a href="https://www.wundergrubs.com/store/c1/Featured_Products.html">Shop</a></li>
              <li className="is-active"><a>Login</a></li>
              <li><a>Register</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Login;