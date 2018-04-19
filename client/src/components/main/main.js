import React,  { Component } from 'react';
import Exercise from './exercise/exercise.js'
import './main.css';

class Main extends Component {
	constructor(){
		super()
		this.state={
			nweek: '',
			exercises: [1,2,3,4,5,6]
		}
	}

	componentWillReceiveProps(){
		let {nweek} = this.props.match.params
		console.log(nweek)
		this.setState({
			nweek
		})
	}
  render() {
    return (
      <div className="Main">
        {
        	this.state.exercises.map((exercise)=>{
        		return(
        		<Exercise exercise={exercise}/>
        		)
        	})
        }
      </div>
    );
  }
}

export default Main;
