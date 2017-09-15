import React, { Component } from 'react';
import Announcements from './announcements.js';
import NewsDisplay from './newsDisplay.js';

class HomePage extends Component {

  render() {
    if(this.props.isLoggedIn){
      return (
        <div>
          <NewsDisplay />
          <Announcements />
        </div>
      );
    } else {
      return (
        <NewsDisplay />
      );
    }
  }
}

export default HomePage;