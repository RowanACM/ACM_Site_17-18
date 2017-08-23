import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../styles/css/ru-acm-style.css';
import Announcements from './announcements.js';
import RowanAcmNavbar from './ru-acm-navbar.js';
import NewsDisplay from './newsDisplay.js';
import Home from './Home.js';
import Committees from './Committees.js';
import Eboard from './Eboard.js';
import Login from './Login.js';
import {Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <RowanAcmNavbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/committees' component={Committees}/>
          <Route exact path='/eboard' component={Eboard}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
