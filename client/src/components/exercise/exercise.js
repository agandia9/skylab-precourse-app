import React, { PureComponent } from 'react';
import './exercise.css';
import Highlight from 'react-highlight'


class Exercise extends PureComponent {
  
  _handlerCheckKO = ()=>{
    console.log('KO!!')
    console.log(this.props.exercise._id)
  }
  
  _handlerCheckOK = ()=>{
    console.log('OK!!')
    console.log(this.props.exercise._id)
  }
  
render(){
    let {statement, example, index} = this.props.exercise.exercise
    let {status} = this.props.exercise
    return (
      <div className={status === 0? 'exercise exercise-base' : status === 1? 'exercise exercise-comp': 'exercise exercise-incomp'}>
        <span className="status-section">
          <h3 id="exercise-statement">{index.toUpperCase() +') ' + statement}</h3>
          <div>
            <button className="button-ok" onClick={this._handlerCheckOK}>✓</button>
            <button className="button-ko" onClick={this._handlerCheckKO}>X</button>
          </div>
        </span>
        
        <Highlight>{example}</Highlight>
      </div>
    );
  }
  }

export default Exercise