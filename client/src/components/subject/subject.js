import React, { Component } from 'react'
import api from '../services/api'
import storage from '../services/storage'
import './subject.css'
import Exercise from '../exercise/exercise'

export class Subject extends Component {
    state = {subjects:[],nsubject:0}
    
    componentWillReceiveProps(nextProps){
        
        let {nsubject} = nextProps.info.match.params
        this.setState({nsubject})
        
    }

    componentWillMount(){
        
        let {nsubject} = this.props.info.match.params
        this.setState({nsubject})
        let {subjects} = this.props.userInfo
        if(!subjects){
            api.listUser(storage.getToken()).then(res => this.setState({subjects:res.data.subjects}) )
        }
        else{
            this.setState({subjects})
        }
    }
    
    _handlerCheckExercise = (idSubject, _id, status) => {
        api.changeTotalStatus(storage.getToken(), idSubject, _id, status)
        .then(res => {
            
            this.setState({subjects:res.data.id.subjects}, this.props._passToNav(res.data.id)) 
        })
      }

    render(){
        {
            console.log(this.state.subjects)
        }
        return(
            
            <div className="main-subject">
            {
                this.state.subjects.length > 0 ?
            
                <div>
                    <div className="info-subject">
                        <h3>{'Unit ' + this.state.subjects[parseInt(this.state.nsubject, 10)].subject.unit + ' - ' +this.state.subjects[parseInt(this.state.nsubject, 10)].subject.title} </h3> 
                        <div className="content" dangerouslySetInnerHTML={{__html: this.state.subjects[parseInt(this.state.nsubject, 10)].subject.theory}}></div>
                        
                    </div>
                    <div className="main-subject-exercises">
                    <h3>Exercises</h3>
                        {
                        this.state.subjects[parseInt(this.state.nsubject, 10)].exercises.map((exercise, index) => {
                                return (
                                    
                                <Exercise 
                                    key={index}
                                    _handlerCheckExercise = {this._handlerCheckExercise}
                                    idSubject={this.state.subjects[parseInt(this.state.nsubject, 10)]._id}
                                    exercise={exercise}
                                />)
                        })
                        }
                    </div>
                </div>
            :<div> No info for this subject </div>}
            </div>
        )
    }
}