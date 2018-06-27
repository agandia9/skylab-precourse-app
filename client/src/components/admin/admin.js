import React, {PureComponent} from 'react'
import api from '../services/api';
import swal from 'sweetalert2'
import './admin.css'
export class Admin extends PureComponent {
    state = {}  

    _handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    _handleCheckAdmin = (e)=>{
        this.setState({
            [e.target.name]: e.target.checked
        })
        
    }
    _handlerCreateUser = (e) => {
        e.preventDefault()
        let {name, surname, username, password, slackUser, isAdmin} = this.state
        api.createUser(name, surname, username, password, slackUser, isAdmin).then((res)=> {
            swal(username + ' crated success')
        })
    }
    render(){
        return (
            <div>
                <h1>Admin Panel - Register new user</h1>
                <form onSubmit={this._handlerCreateUser} className="form-create">
                    <span>Username: <input type="text" required name="username" onChange={this._handleChange} /></span>
                    <span>Password<input type="text" required name="password" onChange={this._handleChange} /></span>
                    <span>Name:<input type="text" required name="name" onChange={this._handleChange} /></span>
                    <span>surname<input type="text" required name="surname" onChange={this._handleChange} /></span>
                    <span>slackUser<input type="text" required name="slackUser" onChange={this._handleChange} /></span>
                    <input type="checkbox" name="isAdmin" required onChange={this._handleCheckAdmin} />
                    <button onClick={this._handlerCreateUser}>Create User</button>
                </form>
            </div>
        )
    }
}