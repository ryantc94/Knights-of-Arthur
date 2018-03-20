import React from 'react'

import '../../SASS/_informationComponent.css'

class InformationComponent extends React.Component {

	//there will be at most 5 badguys in a 9 player game
	//so will only need 5 tiles at most
	// morgana assassin 3 minions -> merlin percavil 2 randos
	render() {
		return (
			<div className='information-container'>
				<div className='information-title-container'>
					<h3 className='information-title'> Teammates / MM / Enemies </h3>
				</div>
				<div className='information-profile-container'>
					<div className='information-profile'> 
						<div className='information-profile-name-container'> 
							<h3 className='information-profile-name'>
								Ryan
							</h3>
						</div> 
						<div className='information-profile-pic-container'>
							<p> picture </p>
						</div> 
					</div>
					<div className='information-profile'> 
						<div className='information-profile-name-container'> 
							<h3 className='information-profile-name'>
								Wei
							</h3>
						</div> 
						<div className='information-profile-pic-container'>
							<p> picture </p>
						</div> 
					</div>
					<div className='information-profile'> 
						<div className='information-profile-name-container'> 
							<h3 className='information-profile-name'>
								Yush
							</h3>
						</div> 
						<div className='information-profile-pic-container'>
							<p> picture </p>
						</div> 
					</div>
					<div className='information-profile'> 
						<div className='information-profile-name-container'> 
							<h3 className='information-profile-name'>
								Adi
							</h3>
						</div> 
						<div className='information-profile-pic-container'>
							<p> picture </p>
						</div> 
					</div>
					<div className='information-profile'> 
						<div className='information-profile-name-container'> 
							<h3 className='information-profile-name'>
								David
							</h3>
						</div> 
						<div className='information-profile-pic-container'>
							<p> picture </p>
						</div> 
					</div>
				</div>
			</div>
		)
	}
}

export default InformationComponent