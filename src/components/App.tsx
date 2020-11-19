import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState } from "react";

import FrontPage from '../views/FrontPage'
import DashBoard from '../views/Dashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.scss';

export default function App() {
  let [status, setStatus] = useState("login");
  let history = useHistory();
  let [user, setUser] = useState(localStorage.getItem('userid') || '');

  return (
      <Switch>
        <Route exact path="/">
        <section className="hero is-fullheight ">
          <div className="hero-head">
            <Header statu="login" setStatus={setStatus}></Header>
          </div>
          <div className="line"></div>
          <FrontPage statu={status} setStatus={setStatus} his={history} setUser={setUser}/>
          <br className="mb-2"></br>
          <div className="hero-foot">
            <Footer setStatus={setStatus}></Footer>
          </div>
          </section>
        </Route>
        <Route path="/logged">
          <div className="line"></div>
          <DashBoard user={user} setStatus={setStatus} his={history}/>
        </Route>
      </Switch>
  )
}
