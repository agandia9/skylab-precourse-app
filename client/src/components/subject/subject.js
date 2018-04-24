import React, {Component } from 'react'
import {Exercise} from '../exercise/exercise'

export class Subject extends Component {
    state = {nsubject: 0}
    componentWillReceiveProps(nextProps){
        
		let {nsubject} = nextProps.match.params
		console.log(nsubject)
		this.setState({
			nsubject
		})
	}
    render(){
        return(
            <div>
                <h3> Subjectssss.....{this.state.nsubject} </h3>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios</p>
            </div>
        )
    }
}