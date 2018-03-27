import React from 'react'

import InformationComponent from './InformationComponent'
import VoteComponent from './VoteComponent'
import MissionComponent from './MissionComponent'

function MobileGame() {
	const isVoting = false;
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

export default MobileGame