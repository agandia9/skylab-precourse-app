import React, { Component } from 'react'
import './login.css'
import axios from 'axios'
import logo from '../../img/skylab-logo.png'
import swal from 'sweetalert2'
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
                swal('Logged', `Welcome again ${username}`, "success")
            }else{
                // close in 2 seconds...
                swal('Error', 'Username or Password not correct', 'error')
            }

        })
    }
    render(){
        return(
            <div className="form-login">
                <span><img className="skylablogo" src={logo} alt="skylab-coders"/></span>
                <p className="description">Welcome to SkylabCoders Precourse App, where you can find the exercises for preparing the course, keep coding!</p>
                <form onSubmit={this._handleLogin}>
                    {/* <input onChange={this._handleChangeUser} type="text" placeholder="username"/>
                    <input onChange={this._handleChangePassword} type="password" placeholder="password"/>
                    <button type="submit" >click for loggin</button> */}
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input 
                                class="input" 
                                type="text"
                                placeholder="username"
                                onChange={this._handleChangeUser}
                            />
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control has-icons-left">
                            <input 
                                class="input" 
                                type="password" 
                                placeholder="Password" 
                                onChange={this._handleChangePassword}
                            />
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control">
                            <button class="button is-success" type="submit">
                            Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}