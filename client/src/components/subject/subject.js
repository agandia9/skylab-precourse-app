import React, {Component } from 'react'
import api from '../services/api'
import './subject.css'
import {Exercise} from '../exercise/exercise'

export class Subject extends Component {
    state = {nsubject: 0, infoSubject:{}}
    componentWillReceiveProps(nextProps){
        
        let {nsubject} = nextProps.match.params
       api.listSubject(parseInt(nsubject)).then(res =>{
            this.setState({infoSubject:res.data})
            console.log(this.state.infoSubject)
        })

	}
    render(){
        return(
            <div className="main-subject">
                <h3> Subject { this.state.infoSubject ? this.state.infoSubject.unit:undefined} </h3>
                <p>
                    {this.state.infoSubject? this.state.infoSubject.theory:undefined}
                </p>
               
                
            </div>
        )
    }
}