import React, { Component } from 'react';
import './App.css';
import storage from './services/storage'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Main} from './main/main'

import {Login} from './login/login'

class App extends Component {
  
  state = {isLogged: false}

  _handleIsLogged =(token)=>{
    this.setState({isLogged:true})
    storage.setToken(token)
  }
  render() {

    const Logged = this.state.isLogged
    ? <Main />
    : <Login _handleIsLogged={this._handleIsLogged}/>
  

  return(
    Logged
  )
  }
}

export default App;
