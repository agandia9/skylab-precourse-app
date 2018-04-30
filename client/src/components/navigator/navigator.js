import React,  { PureComponent } from 'react';
import './navigator.css';
import { NavLink } from 'react-router-dom'
import { Line } from 'rc-progress';
import api from '../services/api';


export class Navigator extends PureComponent {
	state = {userInfo: {}, infoSubjects:[]}
	componentWillMount(){
		api.listSubjects().then(res=> {
			console.log(res.data)
			return this.setState({infoSubjects:res.data})
		})

	}
	componentWillReceiveProps(nextProps){
		console.log('receive props...')
		console.log(nextProps)
			
			this.setState({
				userInfo: nextProps.userInfo
			})
	}

	_handlerCalculateUnitPercentage = () => {
		return this.state.infoSubjects
					.map(subject => subject.unitPercentage)
					.filter(nums => nums !== 0)
					.sort((a,b) => a-b)[0]	
	}

	_handlerColourStatusSubject = (subject)=>{
		return subject.unitPercentage === 100 ? 'completedSubject' : subject.unitPercentage > 0 && subject.unitPercentage < 99 ? 'actualSubject' : ''
	}

  render() {
		console.log('render...')
    return (
      <div>
        <div className="Navigator-profile">
						<div className="status-precourse">
							<p className="percentage-title">Actual Subject {this._handlerCalculateUnitPercentage()}%</p>
							<Line percent={this._handlerCalculateUnitPercentage()} strokeWidth="6" trailWidth="1.5" strokeColor="#20bc78" />
							<p className="percentage-title">Precourse %</p>
							<Line percent={this.state.userInfo ? this.state.userInfo.stateallprecourse:undefined} strokeWidth="6" trailWidth="1.5" strokeColor="#20bc78" />
						</div>
						<h3>Subjects</h3>
						<nav>
							{
								this.state.infoSubjects.map((subject)=>{
									return <NavLink key={subject.unit} to={`/subject/${subject.unit}`} className={this._handlerColourStatusSubject(subject)}>{subject.title}</NavLink>
								})
							}
						</nav>
        </div>
				
      </div>
    );
  }
}