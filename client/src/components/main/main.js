import React,{ Component } from 'react';
import api from '../services/api'
import storage from '../services/storage'
import { Route } from 'react-router-dom'
import {Navigator} from '../navigator/navigator'
import {Profile} from '../profile/profile'
import {Welcome} from '../welcome/welcome'
import {Subject} from '../subject/subject'
import {Header} from '../header/header'
import './main.css';

export class Main extends Component {
	
  componentDidMount(){
    api.listUser(storage.getToken()).then(res => this.props._handlerUserInfo(res.data) )
  }

  render() {
    return (
			<div className="App">
            <Header className="header-div" _handleLogout={this.props._handleLogout} userInfo={this.props.userInfo}/>
            <div className="navigator-div">
                <Navigator userInfo={this.props.userInfo}/>
            </div>
            <div className="main-div">
								<Route 
								exact path={'/'}
								component={Welcome}
								/>
								<Route 
                 exact path={'/subject/:nsubject'}
                render={(props) => <Subject userInfo={this.props.userInfo} info={props}/>}
								/>
                <Route
                path={'/profile/:username'}
                component={Profile}
                />
                
            </div>
        </div>
				

    );
  }
}
