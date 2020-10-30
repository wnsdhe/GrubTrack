import React from "react";
import {useState, useEffect} from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from '../components/Header'
import Transaction from './Transaction'
import Menu from './Menu'
import {transactions} from "../services/gets/index"

type status = { setStatus: any};

export default function Layout({ setStatus}: status) {
  let match = useRouteMatch();
  let [res, SetRes] = useState(null);
  useEffect(() => {
    transactions().then(res => {
      SetRes(res)
    })
  },[])
  return (
    <div className="hero">
      <div className="hero-head">
        <Header statu="logged" setStatus={setStatus}></Header>
      </div>
      <div className="line"></div>
      <div className="hero-body">   
      <Switch>
        <Route path={`${match.url}/menu`}>
          <Menu></Menu>
        </Route>
        <Route path={`${match.url}/transaction`}>
          <Transaction data={res}></Transaction>
        </Route>
        <Route path={`${match.url}/report`}>
          <Transaction data={res}></Transaction>
        </Route>
      </Switch>  
      </div> 
    </div>
  );
};