import React from "react";
import {useState, useEffect} from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from '../components/Header'
import Transaction from './Transaction'
import Menu from './Menu'
import {transactions, reports} from "../services/gets/index"

type status = { setStatus: any, userInfo: any};

export default function Layout({ setStatus, userInfo}: status) {
  let match = useRouteMatch();
  let [res, SetRes] = useState(null);
  let [repos, SetRepos] = useState(null);
  useEffect(() => {
    transactions(userInfo['id']).then(rest => {
      SetRes(rest)
    })
    reports().then(rest => {
      SetRepos(rest)
    })
  },[userInfo])
  return (
    <div className="hero">
      <div className="hero-head">
        <Header statu="logged" setStatus={setStatus}></Header>
      </div>
      <div className="line"></div>
      <div className="hero-body">   
      <Switch>
        <Route path={`${match.url}/menu`}>
          <Menu match={match}></Menu>
        </Route>
        <Route path={`${match.url}/transaction`}>
          <Transaction data={res} setData={SetRes} userInfo={userInfo}></Transaction>
        </Route>
        <Route path={`${match.url}/report`}>
          <div></div>
        </Route>
      </Switch>  
      </div> 
    </div>
  );
};