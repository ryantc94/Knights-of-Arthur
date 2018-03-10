import React from 'react'

import '../../../SASS/_missionResult.css'

//needs to know how many success/fail and show that
function MissionResult() {
	return (
		<div className='mission-result-container'>
			<h1 className='mission-result'> Success! </h1>
			<h1 className='mission-result'> Success! </h1>
			<h1 className='mission-result'> Fail! </h1>
		</div>
	)
}

export default MissionResult