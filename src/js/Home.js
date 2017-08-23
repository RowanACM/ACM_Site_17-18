import React, { Component } from 'react';
import Announcements from './announcements.js';
import NewsDisplay from './newsDisplay.js';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="ru-acm-main-page-contents">
          <div className="ru-acm-main-page-announcements">
            <Announcements />
          </div>
          <NewsDisplay />
        </div>
      </div>
    );
  }
}

export default Home;