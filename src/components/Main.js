import React, { Component } from 'react';
import Auth from "../Auth";

const auth = new Auth();

export class Main extends Component {

  render () {
    console.log(this)
    return (
      <div>
        Do you want to enter the Secret Area? <a href="/secret">Click Here!</a>
        
        <div>
        Please Login first
        <br></br>
        <button onClick={auth.login}>Login</button>
      </div>
      </div>

    )
  }
}