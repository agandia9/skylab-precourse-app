import React, {Component} from 'react'
import storage from '../services/storage'
import { NavLink } from 'react-router-dom'
import './header.css'
import profilePic from '../../img/default.png'
export class Header extends Component {
    _handleLogout = ()=>{
        storage.removeToken()
        this.props._handleLogout()
        
    }
    render(){
        return(
            <header className="App-header">
                <h1 className="App-title">Hello {this.props.userInfo ?  this.props.userInfo.name:''}</h1>
                <div className="App-user-info"> 
                    <div>
                        <img src={ this.props.userInfo.photo !== 'photo' ? this.props.userInfo.photo : profilePic} alt="profile-pic"/>
                        
                    </div>
                    <ul className="nav-top">
                    <NavLink to="/">Home</NavLink>
                    {this.props.userInfo 
                    ? <NavLink to={"/profile/"+this.props.userInfo.username}>Profile</NavLink>
                    : ''
                    }
                    {
                        this.props.isAdmin === true 
                        ? <NavLink to="/admin">Admin</NavLink>
                        : ''
                    }
                    <a className="active" href='/' onClick={this._handleLogout}>Logout</a>
                </ul>
                </div>
            </header>
        )
    }
}