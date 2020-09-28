import React from "react";
import faker from "faker";

import Sidebar from '../components/Sidebar'
import Layout from './Layout'

let name = faker.name.firstName()
let avatar = faker.image.avatar()
let title = faker.name.jobTitle()

type status = { setStatus: any, user:any };

export default function Dashboard({ setStatus, user }: status) {
  console.log(user)
  return (
      <div className="container is-fluid box">
        <div className="columns">
          <div className="column is-one-fifth">
            <Sidebar username={user['username']}
              avatar={avatar}
              jobtitle={user['id']} />
          </div>
          <div className="column">
            <Layout setStatus={setStatus}></Layout>
          </div>
        </div>
      </div>
  );
}