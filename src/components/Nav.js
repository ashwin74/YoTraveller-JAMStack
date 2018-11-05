// src/components/Nav.js
import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'gatsby'

const auth = new Auth();

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  login() {
    auth.login();

    this.setState({
      authenticated: auth.isAuthenticated()
    });
  }

  logout() {
    auth.logout();

    this.setState({
      authenticated: auth.isAuthenticated()
    });
  }

  componentDidMount() {
    this.setState({
      authenticated: auth.isAuthenticated()
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'orange',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Link to="/travel">View Travels</Link>
          <Link to='/create-album'>Create Album</Link>
          <Link to='/about'>About Us</Link>
          {
            !this.state.authenticated && (
              <span>
                <a href="#"
                  onClick={this.login.bind(this)}
                  style={{
                    boxShadow: 'none',
                    lineHeight: '37px'
                  }}
                >
                  Log In
                </a>
              </span>
            )
          }
          {
            this.state.authenticated && (
              <span>
                <a href="#"
                  onClick={this.logout.bind(this)}>
                  Log Out
                  {
                    auth.getUserName() && (
                      <span> ({auth.getUserName()})</span>
                    )
                  }
                </a>
              </span>
            )
          }
        </div>
      </div>
    );
  }
}