import React,  { Component } from 'react';
import {Exercise} from '../exercise/exercise'
import { Route, NavLink } from 'react-router-dom'
import {Navigator} from '../navigator/navigator'
import {Profile} from '../profile/profile'
import {Welcome} from '../welcome/welcome'
import {Subject} from '../subject/subject'
import './main.css';

export class Main extends Component {
	constructor(){
		super()
		this.state={
			nweek: '',
			exercises: [1,2,3,4,5,6]
		}
	}


  render() {
    return (
			<div className="App">
        <header className="App-header row">
				{/* component title */}
          <h1 className="App-title col-sm-10">Welcome to dis thing.</h1>
          <ul className="col-sm-2 nav-top">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile/username">Profile</NavLink>
          </ul>
        </header>
          <div className="row">
            <div className="col-sm-2">
                <Navigator />
            </div>
            <div className="col-sm-10">
								<Route 
								exact path={'/'}
								component={Welcome}
								/>
								<Route 
								 path={'/subject/:nsubject'}
								component={Subject}
								/>
                <Route
                path={'/profile/:username'}
                component={Profile}
                />
            </div>
					</div>
        </div>
				

    );
  }
}
