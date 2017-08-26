import React, {Component} from 'react';

class RowanACMNavbar extends Component {

  //{"/members/" + this.props.user.uid}
  render() {
    const userNavItems = (this.props.isLoggedIn ?  
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle">{this.props.user.displayName}<b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/signout">Sign Out</a></li>
                                </ul>
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
              <span className="navbar-brand"><a className="ru-acm-logo-small" href="index.html">Rowan ACM</a></span>
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
                  {userNavItems}
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