import React, { Component } from 'react'
import axios from 'axios'
//const URL_BASE = 'http://192.168.0.29:5000'
import service from '../services/api'
export class Login extends Component {
    
    state = {
        username: '',
        password: ''
    }  
    _handleChangeUser = (e) =>{
        this.setState({
            username: e.target.value
        })
    }
    _handleChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    _handleLogin = (e)=> {
        e.preventDefault()
        const {username, password} = this.state
        service.login(username, password).then(res=>{
            if(res.status === 'OK'){
                console.log('logged!!')
                
                this.props._handleIsLogged(res.data.token)
            }else{
                console.error('not logged')
                //swal
            }

        })
            
            //res.json()).then(token => console.log(token))
    }
    render(){
        return(
            <form onSubmit={this._handleLogin}>
                <input onChange={this._handleChangeUser} type="text" placeholder="username"/>
                <input onChange={this._handleChangePassword} type="password" placeholder="password"/>
                <button type="submit" >click for loggin</button>
            </form>
        )
    }
}