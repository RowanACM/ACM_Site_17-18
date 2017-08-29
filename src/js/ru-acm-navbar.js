import React, {Component} from 'react';

class RowanACMNavbar extends Component {

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
    const navEntries = [
        <a className="mdl-navigation__link" href="/">Home</a>, 
        <a className="mdl-navigation__link" href="/attendance">Attendance</a>,
        <a className="mdl-navigation__link" href="/committees">Committees</a>,
        <a className="mdl-navigation__link" href="/eboard">Eboard</a>,
      ];
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              {navEntries}
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">Title</span>
          <nav class="mdl-navigation">
            {navEntries}
          </nav>
          <main class="mdl-layout__content">
            <div class="page-content"></div>
          </main>
        </div>
      </div>
    );
  }
}

export default RowanACMNavbar;