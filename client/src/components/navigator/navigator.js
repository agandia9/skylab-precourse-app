import React,  { PureComponent } from 'react';
import './navigator.css';
import { NavLink } from 'react-router-dom'
import { Line } from 'rc-progress';
import api from '../services/api';
import storage from '../services/storage';

export class Navigator extends PureComponent {
	state = {subjects: [], totalPercentage: 0, lastSubject: 0}
	componentWillMount(){	
		api.listUser(storage.getToken()).then(res=> {
			this.setState({subjects:res.data.subjects, totalPercentage: res.data.totalPercentage})
		})

	}
	componentWillReceiveProps(nextProps){
		if(nextProps.newInfoUser.subjects){
			let {totalPercentage, subjects} = nextProps.newInfoUser
		 this.setState({
				subjects,
				totalPercentage
			})
		}
		
	}
	_handlerCalculateUnitPercentage = () => {
			return this.state.subjects
					.map(subject => subject.porcentage)
					.filter(nums => nums !== 0)
					.sort((a,b) => a-b)[0]
	}

	_handlerColourStatusSubject = (subject)=>{
		return subject.porcentage === 100 ? 'completedSubject' : subject.porcentage > 0 && subject.porcentage < 99 ? 'actualSubject' : ''
	}

  render() {
		
    return (
      <div>{
				this.state.subjects ?
        <div className="Navigator-profile">
						<div className="status-precourse">
							
							<p className="percentage-title">Precourse: {parseInt(this.state.totalPercentage)}%</p>
							<Line percent={this.state.totalPercentage} strokeWidth="6" trailWidth="6" strokeColor="#20bc78" />
							<p className="percentage-title">Current Subject: {parseInt(this._handlerCalculateUnitPercentage())|| 0}%</p>
							<Line percent={this._handlerCalculateUnitPercentage()} strokeWidth="6" trailWidth="6" strokeColor="#20bc78" />
						</div>
						<h3>Subjects</h3>
						<nav>
							{
								this.state.subjects.length > 0 ? this.state.subjects.map((subject)=>{
									return <NavLink key={subject.subject.unit} to={`/subject/${subject.subject.unit}`} className={this._handlerColourStatusSubject(subject)}>{subject.subject.unit} - {subject.subject.title}</NavLink>
								}): undefined
							}
						</nav>
        </div>:undefined}
				
      </div>
    );
  }
}