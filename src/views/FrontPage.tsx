import React from "react";
import UserForm from '../components/UserForm'

type status = { statu: string, setStatus: any, his:any, setUser:any };

export default function FrontPage({ statu, setStatus, his, setUser }: status) {
  return (
    <div className="hero-body">
      <div className="container is-fluid ">
        <br className="mt-5"></br>
        <div className="columns is-vcentered has-text-centered">
          <div className="column box wunderback has-text-centered">
            <img alt="" src="/images/WGlogo.png" className="mt-5 cookie"></img>
            {/* <img className="mt-5" alt="" src="https://www.wundergrubs.com/uploads/7/3/8/6/73866685/edited/homepage-taglinerevised_14.png"></img> */}
            <br></br>
            <div className="buttons is-grouped is-centered mt-3">
              <a className="shopb button mr-2 is-dark" href="https://www.wundergrubs.com/store/c1/Featured_Products.html">SHOP NOW</a>
              <a className="shopb button ml-1 is-dark" href="https://www.instagram.com/wundergrubs/">INSTAGRAM</a>
            </div>
          </div>
          <div className="column is-half">
            <div className="box loginbox column is-three-fifths is-offset-one-fifth">
              <br></br>
              <div className="title is-size-1-widescreen 	 is-family-sans-serif">Welcome to GrubTrack!</div>
              <UserForm status={statu} setStatus={setStatus} his={his} setUser={setUser}></UserForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};