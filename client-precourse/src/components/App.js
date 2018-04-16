import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigator from './navigator/navigator.js'
import Main from './main/main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to dis thing.</h1>
        </header>
        <div className="row">
          <div className="col-sm-3">
              <Navigator />
          </div>
          <div className="col-sm-9">
              <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
