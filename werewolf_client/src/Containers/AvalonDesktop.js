
//??? i thought import was only used by nodeJS..
//ans: i think this might be an es6 thing
import React from "react"

import Header from '../Components/Header'
import TotalPlayers from '../Components/Desktop/TotalPlayers'
import Board from '../Components/Desktop/Board'

import '../SASS/_avalonDesktop.css'

/* ???
	How does importing css work like this?
*/

class AvalonDesktop extends React.Component {
	// might be able to user a HOC for the results, or not look into it
	render() {
		const gameStart = this.props.playerPop !== ''
		console.log(this.props.attendingPlayers)
		return (
			<div className='desktop-grid'>
				<Header className='header-component'/>
				{gameStart 
					? <Board 
						mainKey={this.props.mainKey}
						attendingPlayers={this.props.attendingPlayers}
						playerPop={this.props.playerPop}
					/>
					: <TotalPlayers 
						className='game-component'
						playerPop={this.props.playerPop}
						onPopulationInput={this.props.onPopulationInput}
					/> 
				}
			</div>
		)
	};
}

export default AvalonDesktop

