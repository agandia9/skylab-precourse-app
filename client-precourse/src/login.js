import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import App from './components/App'

class Login extends Component {
  render() {
    return (
			<BrowserRouter>
	    		<div>
		    		<NavLink to="/welcome">enter</NavLink>
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