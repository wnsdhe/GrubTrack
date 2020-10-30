import React from "react";
import {
  Link,
  useRouteMatch,
} from "react-router-dom";


let Sidebar = (props:any) => {
  let match = useRouteMatch();

  return (
    <div className="SidebarContainer box is-flex ">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img className="is-rounded" src={props.avatar} alt="avatar" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.username}</p>
              <div className="subtitle is-6">{props.jobtitle}</div>
            </div>
          </div>
          <div className="logoContent">
            <figure className="image is-32x32 LogoContainer">
              <img
                className="is-rounded logo"
                src="/images/fb.svg"
                alt="avatar"
              />
            </figure>
            <figure className="image is-32x32 LogoContainer">
              <img
                className="is-rounded logo"
                src="/images/linkedin.svg"
                alt="avatar"
              />
            </figure>
            <figure className="image is-32x32 LogoContainer">
              <img
                className="is-rounded logo"
                src="/images/twitter.svg"
                alt="avatar"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="menu">
        <p className="menu-label">Main Menu</p>
        <ul className="menu-list">
          <li>
            <Link to={`${match.url}/menu`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${match.url}/transaction`}>Transaction</Link>
          </li>
          <li>
              <Link to={`${match.url}/report`}>Report</Link>
            <ul>
              <li>
                <a href="# ">View Your Report</a>
              </li>
              <li>
                <form id='uploadForm' method="post" action='upload' encType="multipart/form-data">
                <input className="input" type="file" name="sampleFile"/>
                </form>
              </li>
            </ul>
          </li>
          <li>
            <a href="# ">Connect to Cloud</a>
          </li>
        </ul>
        <p className="menu-label">Other Actions</p>
        <ul className="menu-list">
            <li>
                <a href="/">Sign Out</a>
            </li>
        </ul>
      </div>
      <footer className="footer">
          <div className="has-text-centered">
            <p>
              <strong>Dashboard</strong> by{" "}
              <a href="# ">Team GrubTrack</a>.
            </p>
          </div>
        </footer>
    </div>
  );
};

export default Sidebar;