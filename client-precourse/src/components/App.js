import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigator from './navigator/navigator.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './main/main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <h1 className="App-title col-sm-10">Welcome to dis thing.</h1>
          <ul className="col-sm-2">
            <li>logout</li>
            <li>profile</li>
            <li>:)</li>
          </ul>
        </header>
        <BrowserRouter>
          <div className="row">
            <div className="col-sm-3">
                <Navigator />
            </div>
            <div className="col-sm-9">
               <Route
                 path={'/week/:nweek'}
                 component={Main}
                />
            </div>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
