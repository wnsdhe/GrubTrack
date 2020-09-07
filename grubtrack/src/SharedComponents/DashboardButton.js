import React, { Component } from 'react';
import './DashboardButton.css';


class DashboardButton extends Component {

  render() {
    return(
      <div className='button'>
        <button className='DashboardButton'>
          <img className='iconImage' src={this.props.image}></img>
        </button>
        <div className='buttonTextContainer'>
          <div className='buttonText'>{this.props.children}</div>
        </div>
      </div>
    )
  }

}

export default DashboardButton;
