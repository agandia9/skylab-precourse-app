import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'

export class Header extends Component {
    render()
    {
        return(
            <header className="App-header row">
                {/* component title */}
                <h1 className="App-title col-sm-10">Welcome to precourse {'' || this.props.userInfo.username}</h1>
                <ul className="col-sm-2 nav-top">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile/username">Profile</NavLink>
                </ul>
            </header>
        )
    }
}