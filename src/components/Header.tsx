import React from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

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
          $target!.classList.toggle('is-active');
          $target!.classList.toggle('mobile-menu');
        });
    });
  }
}

type status = { statu: string, setStatus: any };

let Header = ({ statu, setStatus }: status) => {
  useEffect(() => {
    burger_menu();
  })

  function switcher(sstatu: string) {
    console.log(sstatu)
    switch (sstatu) {
      case 'login':
        return (
          <div className="navbar-end">
            <a className="navbar-item" href="https://www.wundergrubs.com/">
              Home
                </a>
            <a className="navbar-item" href="https://www.wundergrubs.com/store/c1/Featured_Products.html">
              Shop
                </a>
            <a className="navbar-item is-active" href="# " onClick={() => { setStatus("login") }}>
              <span>Login</span>
            </a>
            <a className="navbar-item" href="# " onClick={() => { setStatus("register") }}>
              <span>Register</span>
            </a>
          </div>
        );
      case 'logged':
        return (
          <div className="navbar-end">
            <a className="navbar-item" href="https://www.wundergrubs.com/">
              Home
                </a>
            <a className="navbar-item" href="https://www.wundergrubs.com/store/c1/Featured_Products.html">
              Shop
                </a>
            <Link className="navbar-item is-active" href="# " onClick={() => { setStatus("login") }} to="/">
              <span>Logout</span>
            </Link>
          </div>
        );
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="https://www.wundergrubs.com/" className="navbar-item">
            <img className="wunderlogo image" src="/images/WGlogo.png" alt="Logo"></img>
          </a>
          <a role="button" className="navbar-burger" data-target="navbarMenuHeroC" aria-label="menu" aria-expanded="false" href="# ">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          {switcher(statu)}
        </div>
      </div>
    </nav>
  )
}

export default Header;