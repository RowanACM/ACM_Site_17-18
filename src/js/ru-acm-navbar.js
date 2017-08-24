import React from 'react';
import UserComponent from './userComponent.js';

class RowanACMNavbar extends UserComponent {

  render() {
    const userNavItem = (this.state.isLoggedIn ?  
                            <li> 
                              <a href={"/members/" + this.state.user.uid}>{this.state.user.displayName}</a> 
                            </li>
                            :
                            <li> 
                              <a href="/login">Login</a> 
                            </li>
                        );
    return (
      <div id="navbarWrapper">
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top ru-acm-navbar">
          <div id="navContainer" className="container-fluid">
            <div className="navbar-header page-scroll"> 
              <span className="navbar-brand"><a className="ru-acm-logo-small" href="index.html"></a></span>
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> 
                <span className="sr-only">Toggle navigation</span> 
                Menu <i className="fa fa-bars"></i> 
              </button> 
              <span className="navbar-text site-header">Rowan ACM</span>
            </div> 
            <div>
              <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse ru-acm-navbar-options"> 
                <ul className="nav navbar-nav navbar-right"> 
                  <li> 
                    <a href="/">Home</a> 
                  </li> 
                  <li> 
                    <a href="/attendance">Attendance</a> 
                  </li> 
                  <li> 
                    <a href="/committees">Committees</a> 
                  </li> 
                  <li> 
                    <a href="/eboard">Eboard</a> 
                  </li> 
                  <li> 
                    <a href="https://rowanacm.slack.com/">Slack</a> 
                  </li> 
                  {userNavItem}
                </ul> 
              </div>
              <div className="ru-acm-navbar-meetingTimes">
                <div className="ru-acm-navbar-meetingTimesTextGlitch" data-text="Meetings every Friday from 2-4pm in Robinson 201 (A && B)">
                  <span> Meetings every Friday from 2-4pm in Robinson 201 (A && B) </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="navbar-spacer" />
      </div>
    );
  }
}

export default RowanACMNavbar;