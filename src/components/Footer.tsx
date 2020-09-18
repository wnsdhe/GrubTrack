import React from "react";

type status = { setStatus: any };

let Footer = ({ setStatus }: status) => {
  return (
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li><a href="https://www.wundergrubs.com/">Home</a></li>
          <li><a href="https://www.wundergrubs.com/store/c1/Featured_Products.html">Shop</a></li>
          <li><a href="# " onClick={()=>{setStatus("login")}}>Login</a></li>
          <li><a href="# " onClick={()=>{setStatus("register")}}>Register</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Footer;