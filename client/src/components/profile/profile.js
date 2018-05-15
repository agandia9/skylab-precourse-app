import React,  { PureComponent } from 'react';
import api from '../services/api'
import './profile.css'
import storage from '../services/storage'

export class Profile extends PureComponent {
	constructor(){
		super()
		this.state={
			userInfo:{}
		}
	}
		
		componentDidMount(nextProps){
			api.listUser(storage.getToken()).then(res => this.setState({userInfo: res.data}) )
		}
		
  render() {
		
    return (
      <div>
        <div className="profile">
        	<h3>Hello {this.state.userInfo ?this.state.userInfo.username :undefined}</h3>
					<div>
						<div>
						<label htmlFor="name-input">Name: </label>
						<input id="name-input" type="text" value={this.state.userInfo.name}/>
						</div>
						<div>
						<label htmlFor="password-input">Password</label>
						<input id="password-input" type="password" value={this.state.userInfo.password}/>
						</div>
					</div>
					<div><img src={this.state.userInfo.photo} alt=""/><input type="file"></input></div>
					<button>Change profile</button>
        </div>
      </div>
    );
  }
}

