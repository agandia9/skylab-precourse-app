import React, { PureComponent } from 'react';
import './exercise.css';
import Highlight from 'react-highlight'


class Exercise extends PureComponent {

  state={
    statement:'',
    example:'',
    index:'',
    status:0
  }

   componentWillReceiveProps(nextProps){
    let {statement, example, index} = nextProps.exercise.exercise
    let {status} = nextProps.exercise

    this.setState({statement, example, index, status})
    
   }
   componentWillMount(){
    let {statement, example, index} = this.props.exercise.exercise
    let {status} = this.props.exercise

    this.setState({statement, example, index, status})
   }
  render(){
    
      return (
        <div className={this.state.status === 0? 'exercise exercise-base' : this.state.status === 1? 'exercise exercise-comp': 'exercise exercise-incomp'}>
          <span className="status-section">
            <h3 id="exercise-statement">{this.state.index.toUpperCase() +') ' + this.state.statement}</h3>
            <div>
              <button className="button-ok" onClick={()=>this.props._handlerCheckExercise(this.props.idSubject, this.props.exercise._id, 1)}>✓</button>
              <button className="button-ko" onClick={()=>this.props._handlerCheckExercise(this.props.idSubject, this.props.exercise._id, 2)}>✕</button>
            </div>
          </span>
          <Highlight >{this.state.example}</Highlight>
        </div>
      );
    }
  }

export default Exercise