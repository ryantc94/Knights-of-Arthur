import React from 'react'

import InformationComponent from '../Components/Mobile/InformationComponent'
import VoteComponent from '../Components/Mobile/VoteComponent'
import MissionComponent from '../Components/Mobile/MissionComponent'
import MobileLoginComponent from '../Components/Mobile/MobileLoginComponent'


import '../SASS/_avalonMobile.css'

//TODO: I can probably use HOC for the Component stuff this will be worth looking into

class AvalonMobile extends React.Component {
	render() {

		const login = false;
		const isVoting = false;
		const isMission = false;

		const game = <div className='mobile-grid'>
						<div className='role-name-container'>
							<h2 className='role-name'> Role Name </h2>
						</div>
						<div>
							<p> Image of Role </p>
						</div>
						<InformationComponent />
						{ isVoting && <VoteComponent /> }
						{ isMission && <MissionComponent /> }
					</div>
		return (
			login 
			? game 
			: <MobileLoginComponent
				userLogin={this.props.userLogin}
			/>
		)
	}
}

export default AvalonMobile