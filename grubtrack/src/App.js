import React from 'react';
import './App.css';
import Switch from 'react-bootstrap/esm/Switch';
import Layout from './Layout/Layout';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Layout}/>
        {/* <Route path="/login"/> */}
      </Switch>
    </div>
  );
}

export default App;
