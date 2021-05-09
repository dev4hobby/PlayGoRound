import React from 'react';
import { NavLink } from 'react-router-dom';
import cookie from 'js-cookie';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  buildLoggedInMenu() {
    return (
      <div className="navbar-brand order-1 text-white my-auto">
        <div className="btn-group">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Welcome {this.props.user.name}
          </button>
          <div className="dropdown-menu">
            <a className="btn dropdown-item" role="button" onClick={this.handleSignOut} href={() => false}>Sign Out</a>
          </div>
        </div>
      </div>
    );
  }

  handleSignOut(e) {
    e.preventDefault();
    const user = cookie.getJSON("user");
    if(user===undefined){
      console.log("Can not sign out as no user cookie found...");
      return;
    }
    console.log("Sign out: " + user);
    fetch('/user/'+user.ID+'/signout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    this.props.handleSignedOut();
    console.log("Handle sign out");
  }

  render() {
    return (
      <div>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={() => false}>D3fau1t shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                </li>
              </ul>
              {
                this.props.user.loggedin ?
                  this.buildLoggedInMenu()
                  : <button type="button" className="btn btn-outline-primary my-2 my-sm-0" onClick={() => { this.props.showModalWindow(); }}>Sign in</button>
              }
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
