import React, {PureComponent } from 'react'
import api from '../services/api'
import './subject.css'
import Exercise from '../exercise/exercise'

export class Subject extends PureComponent {
    state = {infoSubject:{}}
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        let {nsubject} = nextProps.info.match.params
        //change for listUser and render the weeks when the endpoint ready's with states
            api.listSubject(parseInt(nsubject)).then(res =>{
                this.setState({infoSubject:res.data})
        })

    }
    componentWillMount(){
        //change for listUser and render the weeks when the endpoint ready's
            api.listSubject(parseInt(this.props.info.match.params.nsubject)).then(res =>{
                console.log(res)
                this.setState({infoSubject:res.data})
        })

	}
    render(){
        return(
            <div className="main-subject">
                <div className="info-subject">
                    <h3>{ this.state.infoSubject ? 'Unit ' + this.state.infoSubject.unit + ' - ' +this.state.infoSubject.title :undefined} </h3>
                    <p className="theory">
                        {this.state.infoSubject? this.state.infoSubject.theory:undefined}
                    </p>
                </div>
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