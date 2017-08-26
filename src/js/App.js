import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../styles/css/ru-acm-style.css';
import firebase from './firebase.js';
import RowanAcmNavbar from './ru-acm-navbar.js';
import HomePage from './HomePage.js';
import CommitteesPage from './CommitteesPage.js';
import EboardPage from './EboardPage.js';
import SignInPage from './SignInPage.js';
import AttendancePage from './AttendancePage.js';
import SignOutPage from './SignOutPage.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {

  /*
    BEGIN - Handle firebase login state.
  */

  /*
    Set default state as we haven't logged in, but only because we haven't received any auth yet
  */
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false, hasReceivedAuth: false};
  }

  //use our unsubscribe function to remove our listener from firebase
  componentWillUnmount() {
    this.firebaseAuthUnsubscribe();
  }

  //on this component being mounted into dom, 
  componentWillMount() {
    const self = this;
    this.firebaseAuthUnsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        self.setState({isLoggedIn: true, user: user, hasReceivedAuth: true});
      } else {
        self.setState({isLoggedIn: false, hasReceivedAuth: true});
      }
    });
  }
  /*
    END - Handle firebase login state.
  */

  render() {
    /*
      This uses routes to get the page content only if we have received auth information from 
      firebase. Every page load, App.js will make a call to firebase to subscribe to auth state.
      Until this call completes, we don't know whether the user is currently logged in or not.

      (This is a quick call, so it is not worth rendering anything besides navbar to the DOM, 
      as anything in the page area would almost immediately need a page rewrite. If a 'firebase unavailable'
      screen is needed, please use a timeout to then manipulate state if firebase auth is not received after 
      a specified timeout.)

      Thus, we wait until the hasReceivedAuth state is true to handle routing or 
      pass our user state to components (so there are no weird redirect bugs where signout is impossible, 
      or our pages are rendered twice, once with default state values and again with the values 
      we want them to have.)
    */
    const pageContent = 
      this.state.hasReceivedAuth ? (
      <Switch>
        <Route exact path='/' render={() => <HomePage isLoggedIn= {this.state.isLoggedIn} user={this.state.user}/>}/>
        <Route exact path='/committees' render={() => <CommitteesPage isLoggedIn= {this.state.isLoggedIn} user={this.state.user}/>}/>
        <Route exact path='/eboard' render={() => <EboardPage isLoggedIn= {this.state.isLoggedIn} user={this.state.user}/>}/>
        <Route exact path='/signin' render={() => 
            this.state.isLoggedIn ? (
              <Redirect to="/"/>
            ) : (
              <SignInPage isLoggedIn={this.state.isLoggedIn} user={this.state.user}/>
            )
        }/>
        <Route exact path='/signout' render={() => 
            this.state.isLoggedIn ? (
              <SignOutPage />
            ) : (
              <Redirect to="/"/>
            )
        }/>
        <Route exact path='/attendance' render={() => <AttendancePage isLoggedIn= {this.state.isLoggedIn} user={this.state.user}/>}/>
      </Switch>
    ) : (
      <div/>
    );

    return (
      <div>
        <RowanAcmNavbar isLoggedIn= {this.state.isLoggedIn} user={this.state.user} />
        {pageContent}
      </div>
    );
  }
}

export default App;
