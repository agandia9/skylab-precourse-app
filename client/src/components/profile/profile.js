import React,  { PureComponent } from 'react';
import api from '../services/api'
import './profile.css'
import storage from '../services/storage'
import swal from 'sweetalert2'
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
		_handlerSubmitUpdate = () => {
			let {_id, username, password} = this.state.userInfo
			let { newUsername, newPassword } = this.state.userNewInfo
			console.log( _id, username, newUsername, password, newPassword)
			//id, username, newUsername, password, newPassword
			api.updateUser(_id, username, newUsername, password, newPassword).then(()=>{
				swal('updated success')
			}).catch((err) => {
				swal(err)
			})
		}
		render() {
		
    return (
      <div>
        <div className="profile">
        
					<div>
						<div>
							<label htmlFor="name">Username: </label>
							<input id="newUsername" type="text" placeholder={this.state.userInfo.username} onChange={this._handlerChangeInfo}/>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input id="newPassword" type="password" placeholder={this.state.userInfo.password} onChange={this._handlerChangeInfo}/>
						</div>	
					</div>
					<button onClick={this._handlerSubmitUpdate}>Change profile</button>
        </div>
      </div>
    );
  }
}

