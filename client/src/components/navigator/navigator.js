import React,  { Component } from 'react';
import './navigator.css';
import { NavLink } from 'react-router-dom'
import { Line } from 'rc-progress';


export class Navigator extends Component {
  render() {
    return (
      <div>
        <div className="Navigator-profile">
        	<img src="https://www.agendamedicaonline.cl/agendamedica/images/defaultProfilePic.png" alt="profile-pic"/>
        	<span><p>Username</p> <p>@slack user</p></span>
						<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
						<Line percent="50" strokeWidth="4" strokeColor="#D3D3D3" />
						<nav>
							{/*Link[to=/week/$]{$}*7*/}
							<NavLink to="/subject/1">1</NavLink>
							<NavLink to="/subject/2">2</NavLink>
							<NavLink to="/subject/3">3</NavLink>
							<NavLink to="/subject/4">4</NavLink>
							<NavLink to="/subject/5">5</NavLink>
							<NavLink to="/subject/6">6</NavLink>
							<NavLink to="/subject/7">7</NavLink>
						</nav>
        </div>
      </div>
    );
  }
}