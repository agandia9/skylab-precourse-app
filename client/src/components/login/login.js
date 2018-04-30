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
        return service.login(username, password).then(res=>{
            if(res.status === 'OK'){
                console.log('logged!!')
                this.props._handleIsLogged(res.data.token)
                swal({
                    title: 'Logged',
                    text: `Welcome again ${username}`,
                    type:'success',
                    timer: 1500,
                    showConfirmButton: false,
                  })
            }else{
                swal('Error', 'Username or Password not correct',)
            }

        })
    }
    render(){
        return(
            <div className="form-login">
                <span><img className="skylablogo" src={logo} alt="skylab-coders"/></span>
                <p className="description">Welcome to SkylabCoders Precourse App, where you can find the exercises for preparing the course, keep coding!</p>
                <form onSubmit={this._handleLogin}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input 
                                className="input" 
                                type="text"
                                placeholder="username"
                                onChange={this._handleChangeUser}
                            />

                        </p>
                        </div>
                        <div className="field">
                        <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="password" 
                                placeholder="Password" 
                                onChange={this._handleChangePassword}
                            />
                        </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success" type="submit">
                                Login
                                </button>
                            </p>
                    </div>
                </form>
            </div>
        )
    }
}