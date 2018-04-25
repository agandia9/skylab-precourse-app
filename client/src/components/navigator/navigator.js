import React,  { Component } from 'react';
import './navigator.css';
import { NavLink } from 'react-router-dom'
import { Line } from 'rc-progress';


export class Navigator extends Component {

  render() {
    return (
      <div>
        <div className="Navigator-profile">
        	<img src={this.props.userInfo ? this.props.userInfo.photo : ''} alt="profile-pic"/>
        	<span><p>Slack: {this.props.userInfo ? this.props.userInfo.username:''}</p></span>
						<Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
						<Line percent={0 || this.props.userInfo.stateallprecourse} strokeWidth="4" strokeColor="#D3D3D3" />
						<nav>
							{/*Link[to=/week/$]{$}*7*/}
							<NavLink to="/subject/0">0 - Starting with <i class="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/1">1 - Methods <i class="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/2">2 - Objects <i class="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/3">3 - Functions and calls <i class="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/4">4 - Challenges <i class="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/5">5 - Introduction HTML5 <i class="devicon-html5-plain"></i></NavLink>
							<NavLink to="/subject/6">6 - Introduction to CSS3 <i class="devicon-css3-plain"></i></NavLink>
							<NavLink to="/subject/7">7 - Final project and more... 🤓</NavLink>
						</nav>
        </div>
      </div>
    );
  }
}