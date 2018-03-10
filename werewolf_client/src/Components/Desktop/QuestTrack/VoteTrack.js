import React from 'react'

import '../../../SASS/_voteTrack.css'

const VoteTrack = () => {
	return (
		<div className='voteTrack'>
			<div className='vote vote-1'> 
				<p className='vote-text'> Vote 1 </p>
			</div>
			<div className='vote vote-2'>
				<p className='vote-text'> Vote 2 </p>
			</div>
			<div className='vote vote-3'>
				<p className='vote-text'> Vote 3 </p>
			</div>
			<div className='vote vote-4'>
				<p className='vote-text'> Vote 4 </p>
			</div>
			<div className='vote vote-5'>
				<p className='vote-text'> Vote 5 </p>
			</div>
		</div>
	)
}

export default VoteTrack