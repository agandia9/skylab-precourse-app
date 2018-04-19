import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import App from './components/App'
import './login.css'

class Login extends Component {
  render() {
    return (
		<BrowserRouter>
	    		<div >
		    		<form className="form-login" action="">
		    			<input type="text" placeholder="username"/>
		    			<input type="password" placeholder="password"/>
			    		<NavLink to="/welcome">enter</NavLink>
			    	</form>
			    	 <Route
                   path={'/welcome'}
                   component={App}
                  />
                </div>
</BrowserRouter>
    	)
}
}

export default Login