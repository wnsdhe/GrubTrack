import React from "react";
import Header from '../components/Header'

type status = { setStatus: any };

export default function Layout({ setStatus }: status) {
  return (
    <div>
      <div className="hero-head">
        <Header statu="logged" setStatus={setStatus}></Header>
      </div>
      <div className="line"></div>
      
    </div>
  );
};