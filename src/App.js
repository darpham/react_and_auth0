import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./components/Main"
import {Secret} from "./components/Secret"
import {NotFound} from "./components/NotFound"
import {Callback} from "./components/Callback"
 
class App extends Component {

  render () {

    let mainComponent = ""
    switch(this.props.location) {
      case "":
        mainComponent = <Main />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret /> : <NotFound />;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      default:
        mainComponent = <NotFound />;
    }

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome <strong>{this.props.name}</strong>
          </p>
          {mainComponent}
        </header>
      </div>
    );
  }
}

export default App;