import React,  { Component } from 'react';
import api from '../services/api'
import storage from '../services/storage'
import {Exercise} from '../exercise/exercise'
import { Route, NavLink } from 'react-router-dom'
import {Navigator} from '../navigator/navigator'
import {Profile} from '../profile/profile'
import {Welcome} from '../welcome/welcome'
import {Subject} from '../subject/subject'
import {Header} from '../header/header'
import './main.css';

export class Main extends Component {
	constructor(){
		super()
		this.state={
			
		}
	}
  componentDidMount(){
    api.listUser(storage.getToken()).then(res => this.props._handlerUserInfo(res.data) )
  }

  render() {
    return (
			<div className="App">
          <Header userInfo={this.props.userInfo}/>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
                <Navigator userInfo={this.props.userInfo}/>
            </div>
            <div className="col-sm-0 col-md-6 col-lg-9">
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
