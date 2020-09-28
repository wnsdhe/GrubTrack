import React from 'react';
import { login } from '../services/posts';

type statustype = { status: string, setStatus: any, his: any };

let UserForm = ({ status, setStatus, his }: statustype) => {

  function checker() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if ((email as HTMLInputElement).value === "") {
      let error = document.getElementById("emailError");
      if (!error) {
        document.getElementById('emailControl')!.innerHTML += '<p id="emailError" class="help is-danger">This field is required</p>'
      }   
      return false;
    } else {
      let error = document.getElementById("emailError");
      if (error) {
        error.remove();
      }
    }

    if ((password as HTMLInputElement).value === "") {
      let error = document.getElementById("passwordError");
      if (!error) {
        document.getElementById('passwordControl')!.innerHTML += '<p id="passwordError" class="help is-danger">This field is required</p>'
      }    
      return false;
    } else {
      let error = document.getElementById("passwordError");
      if (error) {
        error.remove();
      }
    }

    return true;
  }

  async function loginer(op: string) {
    if (checker() === true) {
      let userData =
      {
        "email": (document.getElementById("email") as HTMLInputElement).value,
        "password": (document.getElementById("password") as HTMLInputElement).value,
      }
      await login(userData, op).then(res => {
        if (res === "Wrong") {
          let error = document.getElementById("emailError");
          if (!error) {
            document.getElementById('emailControl')!.innerHTML += '<p id="emailError" class="help is-danger">Wrong Email/Password</p>'
          }        
        } else {
          his.push('/logged')
        }
      })
    }
  }

  function switcher(statu: string) {
    switch (statu) {
      case 'login':
        return (
          <form onSubmit={() => { }} id="userForm">
            <div className="field">
              <div id="emailControl" className="control">
                <input required id="email" className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <a className="is-pulled-right mb-1" href="# " onClick={() => { setStatus("forget") }}>Forget Password?</a>
            <div className="field">
              <div id="passwordControl" className="control">
                <input required id="password" className="input is-rounded" type="password" placeholder="Password" autoComplete="on"></input>
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
              <button value="Submit" type="button" className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" onClick={() => loginer("login")}>Login</button>
              <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("register") }}>Register</button>
            </div>

          </form>
        );
      case 'register':
        return (
          <form id="userForm" onSubmit={() => { }}>
            <div className="field">
              <div className="control">
                <input required id="email" className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <a className="is-pulled-right mb-1" href="# " onClick={() => { setStatus("forget") }}>Forget Password?</a>
            <br></br>
            <div className="field">
              <div className="control">
                <input required id="password" className="input is-rounded" type="password" placeholder="Password" autoComplete="on"></input>
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
              <button className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { loginer("register") }}>Register</button>
              <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("login") }}>Login</button>
            </div>
          </form>
        );
      case 'forget':
        return (
          <form id="userForm">
            <div className="field">
              <div className="control">
                <input required id="email" className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
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