import React from 'react';
import { login } from '../services/posts';

type statustype = { status: string, setStatus: any, his: any, setUser: any };

let UserForm = ({ status, setStatus, his, setUser }: statustype) => {

  function checker(op: string) {
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

  async function loginer(e: any) {
    e.preventDefault();
    if (status === "login") {
      if (checker(status) === true) {
        let userData =
        {
          "email": (document.getElementById("email") as HTMLInputElement).value,
          "password": (document.getElementById("password") as HTMLInputElement).value,
        }
        await login(userData, status).then(res => {
          if (res === "Wrong") {
            let error = document.getElementById("emailError");
            if (!error) {
              document.getElementById('emailControl')!.innerHTML += '<p id="emailError" class="help is-danger">Wrong Email/Password</p>'
            }
          } else {
            setUser(res)
            his.push('/logged/menu');
          }
        })
      }
    } else if (status === "register") {
      if (checker(status) === true) {
        let userData =
        {
          "username": (document.getElementById("username") as HTMLInputElement).value,
          "lname": (document.getElementById("lname") as HTMLInputElement).value,
          "fname": (document.getElementById("fname") as HTMLInputElement).value,
          "email": (document.getElementById("email") as HTMLInputElement).value,
          "password": (document.getElementById("password") as HTMLInputElement).value,
        }
        await login(userData, status).then(res => {
          console.log(res)
          if (res === "Wrong") {
            let error = document.getElementById("emailError");
            if (!error) {
              document.getElementById('emailControl')!.innerHTML += '<p id="emailError" class="help is-danger">Wrong Email/Password</p>'
            }
          } else {
            console.log(res.errors)
            setStatus("login")
          }
        })
      }
    }

  }

  function checkPass(e: any) {
    if (e.target !== null) {
      if (e.target.value.match("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$") === null) {
        let error = document.getElementById("passwordError");
        if (!error) {
            document.getElementById('passwordControl')!.innerHTML += '<p id="passwordError" class="help is-danger">Password too easy! At least 8 characters with at least one upper case letter and one lower case letter</p>'        
        } else {
          error.remove();
          document.getElementById('passwordControl')!.innerHTML += '<p id="passwordError" class="help is-danger">Password too easy! At least 8 characters with at least one upper case letter and one lower case letter</p>'
        }
      } else {
        let error = document.getElementById("passwordError");
        if (error) {
          error.remove();
        }
      }
    }
  }

  function switcher(statu: string) {
    switch (statu) {
      case 'login':
        return (
          <form onSubmit={loginer} id="userForm">
            <div className="field">
              <div id="emailControl" className="control">
                <input required id="email" className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
              </div>
            </div>
            <br></br>
            <a className="is-pulled-right mb-1" href="# " onClick={() => { setStatus("forget") }}>Forget Password?</a>
            <div className="field">
              <div id="passwordControl" className="control">
                <input onChange={(evt) => checkPass(evt)} required id="password" className="input is-rounded" type="password" placeholder="Password" autoComplete="on"></input>
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
              <button value="Submit" type="submit" className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { }}>Login</button>
              <button className="regb button is-block is-danger is-outlined is-rounded is-medium column is-two-fifth" onClick={() => { setStatus("register") }}>Register</button>
            </div>

          </form>
        );
      case 'register':
        return (
          <form onSubmit={loginer} id="userForm">
            <div className="field">
              <div id="emailControl" className="control">
                <input hidden autoComplete="false"></input>
                <input required id="username" className="input is-rounded" type="text" placeholder="Username" autoComplete="off"></input>
                <input required id="fname" className="input is-rounded" type="text" placeholder="First Name" autoComplete="off"></input>
                <input required id="lname" className="input is-rounded" type="text" placeholder="Last Name" autoComplete="off"></input>
              </div>

            </div>
            <br></br>
            <a className="is-pulled-right mb-1" href="# " onClick={() => { setStatus("forget") }}>Forget Password?</a>
            <br></br>
            <div className="field">
              <div id="passwordControl" className="control">
                <input required id="email" className="input is-rounded" type="email" placeholder="Email" autoFocus autoComplete="on"></input>
                <input onChange={checkPass} required id="password" className="input is-rounded" type="password" placeholder="Password" autoComplete="on"></input>
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
              <button type="submit" className="loginb button is-block is-success is-outlined is-rounded is-medium column is-two-fifth" >Register</button>
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