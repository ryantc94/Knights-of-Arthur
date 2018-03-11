
//??? i thought import was only used by nodeJS..
//ans: i think this might be an es6 thing
import React from "react"
import socketIOClient from "socket.io-client"

import Header from '../Components/Header'
import TotalPlayers from '../Components/Desktop/TotalPlayers'
import Board from '../Components/Desktop/Board'

import '../SASS/_avalonDesktop.css'

/* ???
	How does importing css work like this?
*/

class AvalonDesktop extends React.Component {
	constructor() {
		super();
		this.state = {
		  response: false,
		  endpoint: "http://127.0.0.1:8000"
		};
	}

	componentDidMount() {
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);
		socket.on("test", data => this.setState({ response: data }));
	}

	// might be able to user a HOC for the results, or not look into it
	render() {
		const testBoard = true;
		const testTotalPlayers = false;
		return (
			<div className='desktop-grid'>
				<Header className='header-component'/>
				{testTotalPlayers && <TotalPlayers className='game-component'/> }
				{testBoard && <Board /> }
			</div>
		)
	};
}

export default AvalonDesktop

/* Example from Socket Tutorial
const { response } = this.state;
return (
  
);
<div style={{ textAlign: "center" }}>
		    {response
		      ? <p>
		          The temperature in Florence is: {response.text} °F
		        </p>
		      : <p>Loading...</p>}
		  </div>
*/
