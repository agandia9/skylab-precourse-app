import React, { Component } from 'react';
import './App.css';
import storage from './services/storage'

import {Main} from './main/main'

import {Login} from './login/login'

class App extends Component {
  state = {isLogged: false, userInfo:{}}

  componentDidMount (){
    storage.getToken() ? this.setState({isLogged:true}) : undefined
  }

  _handleIsLogged =(token)=>{
    this.setState({isLogged:true})
    storage.setToken(token)
  }

  _handlerUserInfo = (userInfo)=>{
    this.setState({
      userInfo
    })
  }
  render() {
    const Logged = this.state.isLogged
    ? <Main _handlerUserInfo={this._handlerUserInfo} userInfo={this.state.userInfo}/>
    : <Login _handleIsLogged={this._handleIsLogged}/>
  

  return(
    Logged
  )
  }
}

export default App;
