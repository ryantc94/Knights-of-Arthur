import React from 'react'

import MissionTrack from './MissionTrack'
import VoteTrack from './VoteTrack'

import '../../../SASS/_quest.css'

class Quest extends React.Component {
	constructor() {
		super()
		this.state = {
			quest_1: false,
			quest_2: false,
			quest_3: false,
			quest_4: false,
			quest_5: false
		}
	}
	render() {
		return (
			<div className='quest'>
				<div>
					<MissionTrack />
				</div>
				<div>
					<VoteTrack />
				</div>
			</div>
		)
	}
}

export default Quest