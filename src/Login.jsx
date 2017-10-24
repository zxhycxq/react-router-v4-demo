import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./index.css"

class Login extends Component {
  constructor() {
    super ();
    this.state = {
      redirectToReferrer: false,
    };
    this.login = this.login.bind (this);
  }
  
  login() {
    fakeAuth.authenticate (() => {
      this.setState ({
        redirectToReferrer: true,
      })
    })
  }
  
  
  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const {redirectToReferrer} = this.state;
    
    if (redirectToReferrer) {
      return (
          <Redirect to={from}/>
      )
    }
    return (
        <div>
          <p >必须登录</p>
          <button className="btn-login" onClick={this.login}>登录</button>
        </div>
    );
  }
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout (cb, 100)
  },
};

export default Login;
