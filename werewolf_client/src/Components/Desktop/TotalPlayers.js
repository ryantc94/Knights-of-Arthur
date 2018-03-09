import React from 'react'

import '../../SASS/_totalPlayers.css'

/*
Forms (React and HTML)

Form tag wraps the entire form, everything from input to submit.

<input name | type | placeHolder | value | onChange | required>

*/

class TotalPlayers extends React.Component {
	constructor() {
		super()
		this.state = {
			playerNumber: ''
		}
	}

	// why does using arrow function fix the setState error?
	// if the value in state is not originally set then it won't recognize the input as controlled

	// there was another error here basically setState doesn't occur immediately it compiles changes and then does it,
	// so to fix this you can just do the logic in the render when everything is in the right state

	displayError = population => {
		if(!population.match(/[5-9]/) && population !== '') {
			return true;
		}
		return false;
	}

	//TODO: read about react synthetic events like onsubmit and what not

	handleSubmit = e => {
		console.log('Input was submitted')
	}

	onInputPlayers = e => {
		this.setState({ 
			playerNumber : e.target.value
		})
	}

	onInputSubmit = e => {
		console.log(typeof(this.state.playerNumber))
	}

	render() {
		const {
			playerNumber
		} = this.state

		const incorrectPlayers = this.displayError(playerNumber)

		// you can disable a button with attribute disabled... is that react or just html?
		// also text input will submit if enter is pressed, so use onSubmit in form tag
		// to handle this and handle what do on submit
		return (
			<div className='totalPlayers'>
				<div className='choose-players-text-container'> 
					<h2 className='choose-players-text'> 
						Please choose between 5 - 9 players 
					</h2>
				</div>
				<form 
					className='choose-players-form'
					onSubmit={this.handleSubmit}
				>
					<div className='choose-player-input-container'>
						<input
							className='choose-player-input-text'
							type='text'
							placeholder='Choose 5 - 9 Players'
							value={this.state.playerNumber}
							onChange={this.onInputPlayers}
							required
						/> 
					</div>
					{ incorrectPlayers && 
						<div className='choose-player-input-error'>
							<h3 className='error-message'>
								I told you to choose between 5 - 9... inclusively...
							</h3>
						</div>
					}
					<div className='choose-player-input-submit'>
						<button
							className='choose-player-input-button'
							type='submit'
							disabled={incorrectPlayers}
						> 
							Continue
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default TotalPlayers









