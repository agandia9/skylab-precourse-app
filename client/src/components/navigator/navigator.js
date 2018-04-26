import React,  { PureComponent } from 'react';
import './navigator.css';
import { NavLink } from 'react-router-dom'
import { Line } from 'rc-progress';


export class Navigator extends PureComponent {
	state = {userInfo: {}}

	componentWillReceiveProps(nextProps){
		console.log('receive props...')
		console.log(nextProps)
			
			this.setState({
				userInfo: nextProps.userInfo
			})
	}
  render() {
		console.log('render...')
    return (
      <div>
        <div className="Navigator-profile">
        	<img src={ this.state.userInfo ? this.state.userInfo.photo : undefined} alt="profile-pic"/>
        	<span><p>Slack: {this.state.userInfo ? this.state.userInfo.username:undefined}</p></span>
						<p className="percentage-title">Subject completion</p>
						<Line percent="10" strokeWidth="5" strokeColor="#20bc78" />
						<p className="percentage-title">Total completion</p>
						<Line percent={this.state.userInfo ? this.state.userInfo.stateallprecourse:undefined} strokeWidth="5" strokeColor="#20bc78" />
						<h3>Subjects</h3>
						<nav>
							{/*Link[to=/week/$]{$}*7*/}
							<NavLink to="/subject/0">0 - Starting with <i className="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/1">1 - Methods <i className="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/2">2 - Objects <i className="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/3">3 - Functions and calls <i className="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/4">4 - Challenges <i className="devicon-javascript-plain"></i></NavLink>
							<NavLink to="/subject/5">5 - Introduction HTML5 <i className="devicon-html5-plain"></i></NavLink>
							<NavLink to="/subject/6">6 - Introduction to CSS3 <i className="devicon-css3-plain"></i></NavLink>
							<NavLink to="/subject/7">7 - Final project and more...</NavLink>
						</nav>
        </div>
				
      </div>
    );
  }
}