import React from 'react'
import AvalonDesktop from './AvalonDesktop'
import AvalonMobile from './AvalonMobile'

import '../SASS/_app.css'

/*
 This should be the router?
 */

 //interesting ... if you use ternary it has to be within a div or maybe just jsx templating?

class App extends React.Component {
	render() {
		const isMobile = window.innerWidth <= 500
		
		// TODO: research {} jsx --> {} escape all html
		return isMobile ? <AvalonMobile /> : <AvalonDesktop />
	}
}

export default App

// <AvalonDesktop />