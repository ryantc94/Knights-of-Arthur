import React from 'react'

import '../../../SASS/_missionTrack.css'

//TODO: read up on es6 string literals and the html stuff that comes with it
// This is jsx though.... so review React and JSX...

const MissionTrack = () => {
	return (
		<div className='mission-track'>
			<div className='mission mission-1'>
				<p className='mission-title'> Mission 1 </p>
				<h2 className='mission-text'> 2 </h2>
			</div>
			<div className='mission mission-2'>
				<p className='mission-title'> Mission 2 </p>
				<h2 className='mission-text'> 3 </h2>
			</div>
			<div className='mission mission-3'>
				<p className='mission-title'> Mission 3 </p>
				<h2 className='mission-text'> 2 </h2>
			</div>
			<div className='mission mission-4'>
				<p className='mission-title'> Mission 4 </p>
				<h2 className='mission-text'> 3 </h2>
			</div>
			<div className='mission mission-5'>
				<p className='mission-title'> Mission 5 </p>
				<h2 className='mission-text'> 3 </h2>
			</div>
		</div>
	)
}

export default MissionTrack