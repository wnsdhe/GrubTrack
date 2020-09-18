import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useState } from "react";

import FrontPage from '../views/FrontPage'
import DashBoard from '../views/Dashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.scss';

export default function App() {
  let [status, setStatus] = useState("login");

  return (
      <Switch>
        <Route exact path="/">
        <section className="hero is-fullheight ">
          <div className="hero-head">
            <Header statu="login" setStatus={setStatus}></Header>
          </div>
          <div className="line"></div>
          <FrontPage statu={status} setStatus={setStatus} />
          <br className="mb-2"></br>
          <div className="hero-foot">
            <Footer setStatus={setStatus}></Footer>
          </div>
          </section>
        </Route>
        <Route path="/logged">
          <div className="line"></div>
          <DashBoard setStatus={setStatus}/>
        </Route>
      </Switch>
  )
}
