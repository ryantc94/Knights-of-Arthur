import React from 'react'

import '../SASS/_totalPlayers.css'

class TotalPlayers extends React.Component {
	render() {
		return (
			<div className='totalPlayers'>
				<div className='choose-players-text'> 
					Please Choose From 5 - 9 Players
				</div>
			</div>
		)
	}
}

export default TotalPlayers