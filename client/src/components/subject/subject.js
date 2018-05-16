import React, { Component } from 'react'
import api from '../services/api'
import storage from '../services/storage'
import './subject.css'
import Exercise from '../exercise/exercise'

export class Subject extends Component {
    state = {subjects:[{}],nsubject:0}
    
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
    
    //JOIN DIS IN SINGLE FUNCTION
    _handlerCheckOK = (idSubject, _id, status) => {
        console.log('OK!!')
        api.changeStatus(storage.getToken(), idSubject, _id, status)
        .then(res => {
            console.log(res)
            this.setState({subjects:res.data.id.subjects}) 
        })

      }
    
      _handlerCheckKO = (idSubject, _id, status)=>{
        console.log('KO!!')
        api.changeStatus(storage.getToken(), idSubject, _id, status)
        .then(res => {
            console.log(res)
            this.setState({subjects:res.data.id.subjects}) 
        })
        
      }

    render(){
        return(
            <div className="main-subject">
                 <div className="info-subject">
                    <h3>{ this.state.subjects.length > 1 ? 'Unit ' + this.state.subjects[parseInt(this.state.nsubject, 10)].subject.unit + ' - ' +this.state.subjects[parseInt(this.state.nsubject, 10)].subject.title :undefined} </h3>
                    <p className="theory">
                        {this.state.subjects.length > 1 ? this.state.subjects[parseInt(this.state.nsubject, 10)].subject.theory:undefined}
                    </p>
                </div>
                <div className="main-subject-exercises">
                <h3>Exercises</h3>
                    {
                       this.state.subjects.length > 1 ? this.state.subjects[parseInt(this.state.nsubject, 10)].exercises.map((exercise, index) => {
                            return (
                                
                            <Exercise 
                                key={index}
                                _handlerCheckKO = {this. _handlerCheckKO}
                                _handlerCheckOK={this._handlerCheckOK}
                                idSubject={this.state.subjects[parseInt(this.state.nsubject, 10)]._id}
                                exercise={exercise}
                            />)
                     }) : undefined
                    }
                </div>
            </div>
        )
    }
}