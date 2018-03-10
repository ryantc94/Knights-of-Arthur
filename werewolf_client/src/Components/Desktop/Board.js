import React from 'react'

import Quest from './QuestTrack/Quest'
import TeamResult from './VoteResult/TeamResult'
import MissionResult from './VoteResult/MissionResult'

import '../../SASS/_board.css'

function Board() {
	const hide = false;
	const awaitingPlayer = false;
	return (
		<div className='game-play'>
			<div className='results'>
				{ !awaitingPlayer &&
					<div className='awaiting-result-text-container'>
						<h1 className='awaiting-result-text'>
							Awaiting Player Decisions ...
						</h1>
					</div>
				}
				{hide && <MissionResult />}
				{hide && <TeamResult />}
			</div>
			<div className='quest-component'>
				<Quest />
			</div>
		</div>
	)
}

export default Board