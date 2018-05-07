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
					<input type="text" value={this.state.userInfo.name}/>
					<input type="text" value={this.state.userInfo.password}/>
					<input type="text" value={this.state.userInfo.name}/>
					<img src={this.state.userInfo.photo} alt=""/>
					<button>Change profile</button>
        </div>
      </div>
    );
  }
}

