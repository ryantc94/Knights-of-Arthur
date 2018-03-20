import React from 'react'

import '../../SASS/_voteComponent.css'

//TODO: also needs to awaiting part for the team selector to start the voting process
// And confirmation of what was picked

class VoteComponent extends React.Component {

	onChoiceSubmit() {
		console.log('submit')
	}

	voteDenied() {
		console.log('failed')
	}

	votePassed() {
		console.log('success')
	}
	//TODO: Combine this component with Mission Component
	// can i just use a variable instead of a component for the waiting part...?
	//So... when its mobile the buttons don't have the same styling as default in desktop

	render() {
		// const text = {
		// 	missionText: {
		// 		title: 'Choose Team Outcome',
		// 		success: 'Success',
		// 		fail: 'Fail'
		// 	},
		// 	teamText: {
		// 		title: 'Choose Mission Outcome',
		// 		pass: 'Pass',
		// 		deny: 'Deny'
		// 	}
		// }
		const awaitingCaptain = true;

		return (
			<div className='vote-container'>
				{ awaitingCaptain && 
					<div className='awaiting-captain'>
						<h2> Waiting for Team Captain to Start Votes ... </h2>
					</div>
				}
				<div 
					className={ !awaitingCaptain
						? 'vote-choice-title-container'
						: 'hidden'
					}
				>
					<h2 className='vote-choice-title'> 
						Choose Team Outcome 
					</h2>
				</div>
				<form 
					className={ !awaitingCaptain
						? 'vote-choice-form'
						: 'hidden'
					}
				>
					<div className='vote-button-grid'>
						<div className='vote-button-container'>
							<button 
								className='vote-button pass-button' 
								type='button' 
								onClick={this.votePassed}
							>
								Pass 
							</button>
						</div>
						<div className='vote-button-container'>
							<button 
								className='vote-button deny-button' 
								type='button' 
								onClick={this.voteDenied}
							>
								Deny 
							</button>
						</div>
					</div>
					<div className='vote-choice-submit-container'>
						<input
							type='submit'
							onClick={this.onChoiceSubmit}
							className='vote-choice-submit'
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default VoteComponent