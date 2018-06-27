import React,{ Component } from 'react';
import api from '../services/api'
import storage from '../services/storage'
import { Route } from 'react-router-dom'
import { Navigator } from '../navigator/navigator'
import { Profile } from '../profile/profile'
import { Welcome } from '../welcome/welcome'
import { Subject } from '../subject/subject'
import { Header } from '../header/header'
import { Admin } from '../admin/admin'
import './main.css';

export class Main extends Component {
 
  state={newInfoUser:{}, isAdmin: false}

  componentDidMount(){
    api.listUser(storage.getToken()).then(res => {
      let {isAdmin} = res.data
      this.setState({
        isAdmin
      })
      this.props._handlerUserInfo(res.data)})
  }

  _passToNav = (newInfoUser)=>{
    this.setState({
      newInfoUser
    })
  }

  render() {
    return (
			<div className="App">
            <Header 
              className="header-div" 
              _handleLogout={this.props._handleLogout} 
              userInfo={this.props.userInfo}
              isAdmin={this.state.isAdmin}
            />
            <div className="navigator-div">
                <Navigator 
                  userInfo={this.props.userInfo} 
                  newInfoUser={this.state.newInfoUser}
                />
            </div>
            <div className="main-div">
								<Route 
                  exact path={'/'}
                  component={Welcome}
								/>
								<Route 
                  exact path={'/subject/:nsubject'}
                  render={(props) => <Subject 
                                        userInfo={this.props.userInfo} 
                                        info={props}
                                        _passToNav={this._passToNav}
                                      />}
								/>
                <Route
                  path={'/profile/:username'}
                  component={Profile}
                />
                {
                  this.state.isAdmin ? 
                    <Route
                    path={'/admin'}
                    component={Admin}
                  />
                  : undefined
                }
            </div>
        </div>
				

    );
  }
}
