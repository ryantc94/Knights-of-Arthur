import React from 'react'

import Profile from './ResultProfile'

import '../../../SASS/_teamResult.css'

class TeamResult extends React.Component {
	render() {
		// const teamResults = false;
		// const missionResults=true
		return (
			<div className='team-result'>
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
			</div>
		)
	}
}

export default TeamResult