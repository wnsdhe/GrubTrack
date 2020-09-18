import React from 'react';
import { Link } from 'react-router-dom'

type statustype = { status: string, setStatus: any };

let UserForm = ({ status, setStatus }: statustype) => {

  function switcher(statu: string) {
    switch (statu) {
      case 'login':
        return (
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <a className="is-pulled-right mb-1" href="# " onClick={() => { setStatus("forget") }}>Forget Password?</a>
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
                <input type="checkbox"></input> I agree to the <a href="# ">terms and conditions</a>
              </div>

            </div>

            <br></br>
            <div className="buttons">
              <Link className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("logged") }} to="/logged" >Login</Link>
              <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("register") }}>Register</button>
            </div>

          </form>
        );
      case 'register':
        return (
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <a className="is-pulled-right mb-1" href="# " onClick={() => { setStatus("forget") }}>Forget Password?</a>
            <br></br>
            <div className="field">
              <div className="control">
                <input className="input is-rounded" type="password" placeholder="Password" autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <div className="columns ">
              <div className="column">
                <input type="checkbox"></input> I agree to the <a href="# ">terms and conditions</a>
              </div>
            </div>

            <br></br>
            <div className="buttons">
              <Link className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("logged") }} to="/logged">Register</Link>
              <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("login") }}>Login</button>
            </div>
          </form>
        );
      case 'forget':
        return (
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <div className="columns ">
              <div className="column">
                <input type="checkbox"></input> I agree to the <a href="# ">terms and conditions</a>
              </div>
            </div>
            <br></br>
            <div className="buttons">
              <button className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" >Submit</button>
              <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("login") }}>Login</button>
            </div>
          </form>
        );
    }
  }

  return (
    <div>
      {switcher(status)}
    </div>
  );
}

export default UserForm;