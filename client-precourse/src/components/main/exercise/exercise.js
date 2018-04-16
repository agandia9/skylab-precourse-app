import React, { Component } from 'react';
import './exercise.css';

class Exercise extends Component {
	constructor(){
		super()
	}

  componentWillMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="exercise">
        <p>{this.props.exercise}</p>
      </div>
    );
  }
}

export default Exercise;