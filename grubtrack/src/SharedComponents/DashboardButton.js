import React, { Component } from 'react';
import './styles.css';


class DashboardButton extends Component {

  render() {
    return(
      <div className='button'>
      <button class='DashboardButton'>
      {this.props.children}
      </button>
      </div>
    )
  }

}

export default DashboardButton;
