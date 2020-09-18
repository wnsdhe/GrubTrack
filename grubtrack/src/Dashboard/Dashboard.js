import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    console.log("HEHLKJF:LKHSDL:FKJSD:LFKJSD:LJKf;lkSJ");
    return (
      <div>
        <div className="column box wunderback-layout has-text-centered">
          Placeholder for Some text
        </div>
        <div className="buttonContainer">
          <div>
            <DashboardButton image = {Icon1}> YourText1 </DashboardButton>
            <DashboardButton image = {Icon1}> YourText1 </DashboardButton>
            <DashboardButton image = {Icon1}> YourText1 </DashboardButton>
          </div>
          <div>
            <DashboardButton image = {Icon1}> YourText1 </DashboardButton>
            <DashboardButton image = {Icon1}> YourText1 </DashboardButton>
            <DashboardButton image = {Icon1}> YourText1 </DashboardButton>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Dashboard;