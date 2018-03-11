import React from 'react'

import '../../SASS/_missionComponent.css'

class MissionComponent extends React.Component {

	//TODO: need to make it so that if something is not clicked you cant submit
	//https://gist.github.com/basarat/1966acc2fbae85f7f1a3ca1f4799ba8b
	onChoiceSubmit() {
		console.log('submit')
	}

	missionFailed() {
		console.log('failed')
	}

	missionSuccess() {
		console.log('success')
	}

	//So... when its mobile the buttons don't have the same styling as default in desktop

	render() {
		return (
			<div className='mission-container'>
				<div className='mission-choice-title-container'>
					<h2 className='mission-choice-title'> 
						Choose Mission Outcome 
					</h2>
				</div>
				<form className='mission-choice-form'>
					<div className='mission-button-grid'>
						<div className='mission-button-container'>
							<button 
								className='mission-button success-button' 
								type='button' 
								onClick={this.missionSuccess}
							>
								Success 
							</button>
						</div>
						<div className='mission-button-container'>
							<button 
								className='mission-button fail-button' 
								type='button' 
								onClick={this.missionFailed}
							>
								Fail 
							</button>
						</div>
					</div>
					<div className='mission-choice-submit-container'>
						<input
							type='submit'
							onClick={this.onChoiceSubmit}
							className='mission-choice-submit'
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default MissionComponent