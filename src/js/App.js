import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../styles/css/ru-acm-style.css';
import Announcements from './announcements.js';
import RowanAcmNavbar from './ru-acm-navbar.js';
import NewsDisplay from './newsDisplay.js';

class App extends Component {

  render() {
    return (
      <div>
        <RowanAcmNavbar />
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

export default App;
