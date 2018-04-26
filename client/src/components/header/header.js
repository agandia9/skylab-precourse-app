import React, {Component} from 'react'
import storage from '../services/storage'
import {NavLink, Redirect} from 'react-router-dom'
import './header.css'

export class Header extends Component {
    _handleLogout = ()=>{
        storage.removeToken()
        this.props._handleLogout()
    }
    render()
    {
        
        return(
            
            <header className="App-header">
                {/* component title */}
                <h1 className="App-title">Welcome {this.props.userInfo ?  this.props.userInfo.username:''}</h1>
                <ul className="nav-top">
                    <NavLink to="/"> 🏠 Home</NavLink>
                     <a className="active" onClick={this._handleLogout}>↩️ Logout</a>
                    {this.props.userInfo 
                    ? <NavLink to={"/profile/"+   this.props.userInfo.username}>👤 Profile</NavLink>
                    : ''
                    }
                    
                </ul>
            </header>
        )
    }
}