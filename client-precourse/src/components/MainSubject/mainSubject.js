import React,  { Component } from 'react';
import Exercise from './exercise/exercise.js'
import './mainSubject.css';

class MainSubject extends Component {
	constructor(){
		super()
		this.state={
			nsubject: '',
			exercises: [1,2,3,4,5,6]
		}
	}

	componentWillMount(){
		let {nsubject} = this.props.match.params
		console.log(this.props.match)
		return this.setState({
			nsubject
		})
	}

	componentWillReceiveProps(nextProps){
		let {nsubject} = nextProps.match.params
		console.log(this.props.match)
		this.setState({
			nsubject
		})
	}
  render() {
    return (
      <div className="Main">
      	<h2>Subject {this.state.nsubject}</h2>
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

export default MainSubject;
