import React from "react";
import {
  Link,
} from 'react-router-dom';
type status = {match: any };


export default function Menu({match}: status) {
  return (
    <div className="box dashbox">
      <div className="buttonContainer">
        <div className="field is-grouped">
          <p className="control">
            <Link to={`${match.url}/menu`}><button className="button">Dashboard</button></Link>
          </p>
          <p className="control">
            <Link to={`${match.url}/transaction`}><button className="button">Transaction</button></Link>
          </p>
          <p className="control">
            <Link to={`${match.url}/report`}><button className="button">Report</button></Link>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button" onClick={() => {window.open('https://www.wundergrubs.com/')}}>Home</button>
          </p>
          <p className="control">
            <button className="button" onClick={() => {window.open('https://www.wundergrubs.com/store/c1/Featured_Products.html')}}>Shopping</button>
          </p>
          <p className="control">
            <Link to="/"><button className="button">Sign out</button></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
