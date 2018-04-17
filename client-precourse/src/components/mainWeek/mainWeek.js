import React,  { Component } from 'react';
import Exercise from './exercise/exercise.js'
import './main.css';

class MainWeek extends Component {
	constructor(){
		super()
		this.state={
			nweek: '',
			exercises: [1,2,3,4,5,6]
		}
	}

	componentWillMount(){
		let {nweek} = this.props.match.params
		console.log(this.props.match)
		return this.setState({
			nweek
		})
	}

	componentWillReceiveProps(nextProps){
		let {nweek} = nextProps.match.params
		console.log(this.props.match)
		this.setState({
			nweek
		})
	}
  render() {
    return (
      <div className="Main">
      	<h2>{this.state.nweek}</h2>
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

export default MainWeek;
