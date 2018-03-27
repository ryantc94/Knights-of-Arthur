import React from 'react'

import Quest from './QuestTrack/Quest'
import TeamResult from './VoteResult/TeamResult'
import MissionResult from './VoteResult/MissionResult'
import AwaitingPlayers from './AwaitingPlayers'

import '../../SASS/_board.css'

function Board({roomKey, attendingPlayers, playerPop}) {
	const awaitingPlayer = attendingPlayers === playerPop
	console.log(attendingPlayers)
	const testMission = !awaitingPlayer && false;
	const testTeam = !awaitingPlayer && false;
	return (
		<div className='game-play'>
			<div className='results'>
				{ !awaitingPlayer 
					&& <AwaitingPlayers 
						playerPop={playerPop}
						roomKey={roomKey}
						attendingPlayers={attendingPlayers}
					/>
				}
				{testMission && <MissionResult />}
				{testTeam && <TeamResult />}
			</div>
			<div className='quest-component'>
				<Quest />
			</div>
		</div>
	)
}

export default Board