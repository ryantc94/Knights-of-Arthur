import React from 'react'

import '../../SASS/_awaitingPlayers.css'

function AwaitingPlayers({roomKey, attendingPlayers, playerPop}) {
	return(
		<div className='awaiting-result-text-container'>
			<div className='awaiting-result-text-flex'>
				<h1 className='awaiting-result-text'>
					Players In Room: {attendingPlayers} / {playerPop}
				</h1>
			</div>
			<div className='awaiting-result-text-flex'>
				<h2>
					Room Key: {roomKey}
				</h2>
			</div>
		</div>
	)
}

export default AwaitingPlayers