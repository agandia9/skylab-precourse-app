import React,  { PureComponent } from 'react';
import api from '../services/api'
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
        </div>
      </div>
    );
  }
}

