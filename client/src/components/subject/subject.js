import React, {PureComponent } from 'react'
import api from '../services/api'
import storage from '../services/storage'
import './subject.css'
import Exercise from '../exercise/exercise'

export class Subject extends PureComponent {
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
            console.log('reload?..')
            api.listUser(storage.getToken()).then(res => this.setState({subjects:res.data.subjects}) )
        }
        else{
            this.setState({subjects})
        }
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
                    {
                       this.state.subjects.length > 1 ? this.state.subjects[parseInt(this.state.nsubject, 10)].exercises.map((exercise, index) => {
                            return <Exercise key={index} exercise={exercise}/>
                     }):undefined
                    }
                </div>
            </div>
        )
    }
}