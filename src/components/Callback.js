import React, { Component } from 'react';
import Auth from "../Auth";

const auth = new Auth();

export class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render () {
    return (
      <div>
        Loading...
      </div>
    )
  }
}