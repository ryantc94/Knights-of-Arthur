import React from 'react'

import '../SASS/_totalPlayers.css'

/*
Forms (React and HTML)

Form tag wraps the entire form, everything from input to submit.

<input name | type | placeHolder | value | onChange | required>

*/

class TotalPlayers extends React.Component {
	constructor() {
		super()
		this.state = {
			playerNumber: null
		}
	}

	// why does using arrow function fix the setState error?
	onInputPlayers = e => {
		this.setState({ [e.target.name] : e.target.value})
	}

	onInputSubmit = e => {
		console.log(typeof(this.state.playerNumber))
	}

	render() {
		return (
			<div className='totalPlayers'>
				<div className='choose-players-text-container'> 
					<h2 className='choose-players-text'> 
						Please choose between 5 - 9 players 
					</h2>
				</div>
				<form className='choose-players-form'>
					<div className='chooser-player-input-container'>
						<input
							name='playerNumber'
							type='text'
							placeholder='Choose 5 - 9 Players'
							value={this.state.playerNumber}
							onChange={this.onInputPlayers}
							required
						/> 
					</div>
					<div className='chooser-player-input-error'>
						<h3> I told you to choose between 5 - 9... inclusively...</h3>
					</div>
					<div className='chooser-player-input-submit'>
						<input type='submit' value='Start' onSubmit={this.onInputSubmit}/>
					</div> 
				</form>
			</div>
		)
	}
}

export default TotalPlayers