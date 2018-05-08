import React, {Component} from 'react'
import storage from '../services/storage'
import {NavLink, Redirect} from 'react-router-dom'
import './header.css'

export class Header extends Component {
    _handleLogout = ()=>{
        storage.removeToken()
        this.props._handleLogout()
    }
    render(){
        return(
            <header className="App-header">
                <h1 className="App-title">Hello {this.props.userInfo ?  this.props.userInfo.username:''}</h1>
                <div className="App-user-info"> 
                    <div>
                        <img src={ this.props.userInfo ? this.props.userInfo.photo : undefined} alt="profile-pic"/>
                        <h3>{this.props.userInfo ? this.props.userInfo.name : undefined}</h3>
                        <span><p>Slack: {this.props.userInfo ? this.props.userInfo.username:undefined}</p></span>
                    </div>
                    <ul className="nav-top">
                    <NavLink to="/"> 🏠 Home</NavLink>
                    {this.props.userInfo 
                    ? <NavLink to={"/profile/"+this.props.userInfo.username}>👤 Profile</NavLink>
                    : ''
                    }
                    <a className="active" onClick={this._handleLogout}>↩️ Logout</a>
                </ul>
                </div>
            </header>
        )
    }
}