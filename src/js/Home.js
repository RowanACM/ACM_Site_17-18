import React, { Component } from 'react';
import Announcements from './announcements.js';
import NewsDisplay from './newsDisplay.js';
import UserComponent from './userComponent.js';

class Home extends UserComponent {

  render() {
    if(this.state.isLoggedIn){
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
    } else {
      return (
        <div>
          <div className="ru-acm-main-page-contents">
            <NewsDisplay />
          </div>
        </div>
      );
    }
  }
}

export default Home;