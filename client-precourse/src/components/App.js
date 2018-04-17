import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigator from './navigator/navigator.js'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import MainWeek from './mainWeek/mainWeek.js'
import Profile from './profile/profile.js'
import Welcome from './welcome/welcome.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <header className="App-header row">
            <h1 className="App-title col-sm-10">Welcome to dis thing.</h1>
            <ul className="col-sm-2 nav-top">
               <NavLink to="/welcome">Home</NavLink>
               <NavLink to="/logout">Logout</NavLink>
              <NavLink to="/profile/username">Profile</NavLink>
            </ul>
          </header>
            <div className="row">
              <div className="col-sm-2">
                  <Navigator />
              </div>
              <div className="col-sm-10">
                 <Route
                   path={'/week/:nweek'}
                   component={MainWeek}
                  />
                  <Route
                   path={'/profile/:username'}
                   component={Profile}
                  />
                  <Route
                   path={'/welcome'}
                   component={Welcome}
                  />
              </div>
          </div>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
