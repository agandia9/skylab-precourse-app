import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'

export class Header extends Component {
    render()
    {
        return(
            <header className="App-header">
                {/* component title */}
                <h1 className="App-title">Welcome to precourse {this.props.userInfo ?  this.props.userInfo.username:''}</h1>
                <ul className="nav-top">
                    <NavLink to="/">Home</NavLink>
                    {this.props.userInfo 
                    ? <NavLink to={"/profile/"+   this.props.userInfo.username}>Profile</NavLink>
                    : ''
                    }
                    
                </ul>
            </header>
        )
    }
}