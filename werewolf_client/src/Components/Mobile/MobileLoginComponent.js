import React from 'react'

import '../../SASS/_mobileLogin.css'

class MobileLoginComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			roomInput: '',
			nameInput: ''
		}
		this.roomKeyInput = this.roomKeyInput.bind(this)
		this.playerNameInput = this.playerNameInput.bind(this)
	}

	roomKeyInput = e => {
		this.setState({roomInput: e.target.value})
	}

	playerNameInput = e => {
		this.setState({nameInput: e.target.value})
	}

	onFormSubmit = e => {
		e.preventDefault();
        e.stopPropagation();
		this.props.userLogin(this.state.nameInput, this.state.roomInput);
	}

	render() {
		return (
			<form 
				className='login-grid'
				onSubmit={this.onFormSubmit}
			>
				<div className='code-container'>
					<input 
						className='code'
						type='text'
						placeholder='Room Key'
						value={this.state.roomInput}
						onChange={this.roomKeyInput}
						required
					/>
				</div>
				<div className='user-name-container'>
					<input 
						className='user-name'
						type='text'
						placeholder='Your Name'
						value={this.state.nameInput}
						onChange={this.playerNameInput}
						required
					/>
				</div>
				<div className='profile-pic-container'>
					In Progress...
				</div>
				<div className='new-user-submit-container'>
					<input 
						className='new-user-submit'
						type='submit' 
					/>
				</div>
			</form>
		)
	}
}

export default MobileLoginComponent