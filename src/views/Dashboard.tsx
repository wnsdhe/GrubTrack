import React from "react";
import faker from "faker";
import Sidebar from '../components/Sidebar'
import Layout from './Layout'

let avatar = faker.image.animals()

type status = { setStatus: any, user:any, his:any };

export default function Dashboard({ setStatus, user, his }: status) {

  return (
      <div className="container is-fluid box">
        <div className="columns">
          <div className="column is-one-fifth">
            <Sidebar username={user['username']}
              avatar={avatar}
              jobtitle= {user['id']}
              hist={his}/>
          </div>
          <div className="column box">
            <Layout setStatus={setStatus} userInfo={user}></Layout>
          </div>
        </div>
      </div>
  );
}