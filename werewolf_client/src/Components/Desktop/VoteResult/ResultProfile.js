import React from 'react'

import '../../../SASS/_resultProfile.css'

function ResultProfile() {
	return (
		<div className='profile'>
			<div className='player-name-container'>
				<p className='player-name'> Name </p>
			</div>
			<div className='player-pic'>
				<img alt='' src=''/>
			</div>
			<div className='player-decision-container'>
				<p className='player-decision'> Decision </p>
			</div>
		</div>
	)
}

export default ResultProfile