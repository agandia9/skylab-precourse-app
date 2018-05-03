import React, {PureComponent } from 'react'
import api from '../services/api'
import './subject.css'
import {Exercise} from '../exercise/exercise'

export class Subject extends PureComponent {
    state = {nsubject: 0, infoSubject:{}}
    componentWillReceiveProps(nextProps){
        let {nsubject} = nextProps.match.params
            api.listSubject(parseInt(nsubject)).then(res =>{
                this.setState({infoSubject:res.data})
                console.log(this.state.infoSubject)
        })

    }
    componentWillMount(){
            api.listSubject(parseInt(this.props.match.params.nsubject)).then(res =>{
                this.setState({infoSubject:res.data})
        })

	}
    render(){
        return(
            <div className="main-subject">
                <h3>{ this.state.infoSubject ? this.state.infoSubject.title:undefined} </h3>
                <p>
                    {this.state.infoSubject? this.state.infoSubject.theory:undefined}
                </p>
                <div className="main-subject-exercises">
                    {
                        this.state.infoSubject.exercises ? this.state.infoSubject.exercises.map((exercise, index) => {
                            return <Exercise key={index} exercise={exercise}/>
                        }):undefined
                    }
                </div>
            </div>
        )
    }
}