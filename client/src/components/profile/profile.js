import React,  { PureComponent } from 'react';
import api from '../services/api'
import './profile.css'
import storage from '../services/storage'

export class Profile extends PureComponent {
	constructor(){
		super()
		this.state={
			userInfo:{},
			userNewInfo:{}
		}
	}
		
		componentDidMount(nextProps){
			api.listUser(storage.getToken()).then(res => this.setState({userInfo: res.data}) )
		}
		
		_handlerChangeInfo = (e)=>{
			console.log(e.target.id)
			let key = e.target.id
			let value = e.target.value
			let change = (fieldset, field, data) => {
				this.setState(prevState=>({
					[fieldset]: {
						...prevState[fieldset],
						[field]: data,
					}
				}))
			}
			change('userNewInfo', key, value)
		}
		_handlerChangeInfo = () => {
			console.log('yeyyy')
		}
  render() {
		
    return (
      <div>
        <div className="profile">
        
					<div>
						<div>
							<label htmlFor="name">Name: </label>
							<input id="name" type="text" placeholder={this.state.userInfo.name} onChange={this._handlerChangeInfo}/>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input id="password" type="password" placeholder={this.state.userInfo.password} onChange={this._handlerChangeInfo}/>
						</div>
						<div>
							<label htmlFor="slackUser">Slack User: </label>
							<input id="slackUser" type="text" placeholder={this.state.userInfo.slackUser} onChange={this._handlerChangeInfo}/>
						</div>	
					</div>
					<div>
						<img src={this.state.userInfo.photo} alt=""/>
						<input type="file"></input>
					</div>
					<button onClick={this._handlerChangeInfo}>Change profile</button>
        </div>
      </div>
    );
  }
}

