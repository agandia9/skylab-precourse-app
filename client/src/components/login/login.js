import React, { Component } from 'react'
import './login.css'
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
        return service.login(username, password)
            .then(res=>{
                if(res.status === 'OK'){
                    this.props._handleIsLogged(res.data.token)
                    swal({
                        title: 'Logged',
                        text: `Welcome again ${username}`,
                        type:'success',
                        timer: 1500,
                        showConfirmButton: false,
                    })
                }else{
                    swal('Error', 'Username or Password not correct', 'error')
                }
            })
            //not works.... for when lost connection with heroku  
            .catch((err)=>{
                swal('Error', err,'')
            })
    }
    render(){
        return(
            <div className="form-login">
                <span><img className="skylablogo" src={logo} alt="skylab-coders"/></span>
                <p className="description">Welcome to SkylabCoders Precourse App, where you can find the exercises for preparing the course, keep coding!</p>
                <form onSubmit={this._handleLogin}>
                    <div className="field">
                            <input 
                                className="input input-login" 
                                type="text"
                                placeholder="username"
                                required
                                onChange={this._handleChangeUser}
                            />

                        
                        </div>
                        <div className="field">
                        
                            <input 
                                className="input input-login" 
                                type="password" 
                                placeholder="password" 
                                required
                                onChange={this._handleChangePassword}
                            />
                        
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