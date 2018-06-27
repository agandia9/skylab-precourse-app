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
			let {_id} = this.state.userInfo
			let { username, password } = this.state.userNewInfo
			console.log( _id, username, password)

			api.updateUser(_id, username, password).then(()=>{
				swal('updated success')
			})
		}
		render() {
		
    return (
      <div>
        <div className="profile">
        
					<div>
						<div>
							<label htmlFor="name">Name: </label>
							<input id="username" type="text" placeholder={this.state.userInfo.username} onChange={this._handlerChangeInfo}/>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input id="password" type="password" placeholder={this.state.userInfo.password} onChange={this._handlerChangeInfo}/>
						</div>	
					</div>
					<button onClick={this._handlerSubmitUpdate}>Change profile</button>
        </div>
      </div>
    );
  }
}

