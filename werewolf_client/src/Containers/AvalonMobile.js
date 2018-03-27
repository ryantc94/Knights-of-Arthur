import React from 'react'

import MobileLoginComponent from '../Components/Mobile/MobileLoginComponent'
import MobileGame from '../Components/Mobile/MobileGame'


import '../SASS/_avalonMobile.css'


class AvalonMobile extends React.Component {
	render() {
		return (
			this.props.loginSuccess
			? <MobileGame />
			: <MobileLoginComponent
				loginSuccess={this.props.loginSuccess}
				userLogin={this.props.userLogin}
			/>
		)
	}
}

export default AvalonMobile