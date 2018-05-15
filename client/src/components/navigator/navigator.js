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
			console.log(res)
			this.setState({subjects:res.data.subjects, totalPercentage: res.data.totalPercentage})
		})

	}

	_handlerCalculateUnitPercentage = () => {
			return parseInt(this.state.subjects
					.map(subject => subject.porcentage)
					.filter(nums => nums !== 0)
					.sort((a,b) => a-b)[0])
	}

	_handlerColourStatusSubject = (subject)=>{
		return subject.porcentage === 100 ? 'completedSubject' : subject.porcentage > 0 && subject.porcentage < 99 ? 'actualSubject' : ''
	}

  render() {
    return (
      <div>
        <div className="Navigator-profile">
						<div className="status-precourse">
							<p className="percentage-title">Actual Subject: {this._handlerCalculateUnitPercentage()}%</p>
							<Line percent={this._handlerCalculateUnitPercentage} strokeWidth="6" trailWidth="6" strokeColor="#20bc78" />
							<p className="percentage-title">Precourse %</p>
							<Line percent={this.state.totalPercentage ? this.state.totalPercentage:undefined} strokeWidth="6" trailWidth="6" strokeColor="#20bc78" />
						</div>
						<h3>Subjects</h3>
						<nav>
							{
								this.state.subjects ? this.state.subjects.map((subject)=>{
									console.log(subject)
									return <NavLink key={subject.subject.unit} to={`/subject/${subject.subject.unit}`} className={this._handlerColourStatusSubject(subject)}>{subject.subject.unit} - {subject.subject.title}</NavLink>
								}): undefined
							}
						</nav>
        </div>
				
      </div>
    );
  }
}