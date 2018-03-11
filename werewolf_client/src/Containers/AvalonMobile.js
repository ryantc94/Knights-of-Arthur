import React from 'react'

import InformationComponent from '../Components/Mobile/InformationComponent'
import VoteComponent from '../Components/Mobile/VoteComponent'
import MissionComponent from '../Components/Mobile/MissionComponent'


import '../SASS/_avalonMobile.css'

//TODO: I can probably use HOC for the Component stuff this will be worth looking into

class AvalonMobile extends React.Component {
	render() {

		const isVoting = true;
		const isMission = false;

		return (
			<div className='mobile-grid'>
				<div className='role-name-container'>
					<h2 className='role-name'> Role Name </h2>
				</div>
				<div>
					<p> Image of Role </p>
				</div>
				<InformationComponent />
				{ isVoting && <VoteComponent /> }
				{ isMission && <MissionComponent /> }
			</div>
		)
	}
}

export default AvalonMobile