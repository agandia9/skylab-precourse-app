import React, { Component } from 'react';
import './exercise.css';

export class Exercise extends Component {
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
