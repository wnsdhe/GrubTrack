import React from "react";
import faker from "faker";

import Sidebar from '../components/Sidebar'
import Layout from './Layout'

let name = faker.name.firstName()
let avatar = faker.image.avatar()
let title = faker.name.jobTitle()

type status = { setStatus: any };

export default function Dashboard({ setStatus }: status) {
  return (
      <div className="container is-fluid box">
        <div className="columns">
          <div className="column is-one-fifth">
            <Sidebar username={name}
              avatar={avatar}
              jobtitle={title} />
          </div>
          <div className="column">
            <Layout setStatus={setStatus}></Layout>
          </div>
        </div>
      </div>
  );
}