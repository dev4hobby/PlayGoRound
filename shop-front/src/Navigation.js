import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
  buildLoggedInMenu() {
    return (
      <div className="navbar-brand order-1 text-white my-auto">
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Welcome {this.props.user.name}
          </button>
          <div className="dropdown-menu">
            <a href={() => false} className="btn dropdown-item" role="button">Sign Out</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"   href={() => false}>D3fau1t shop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                </li>
              </ul>
              {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="In Progress.." aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">In progress</button>
              </form> */}
              {
                this.props.user.loggedin ?
                  this.buildLoggedInMenu()
                  : <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={() => { this.props.showModalWindow(); }}>Sign in</button>
              }
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
