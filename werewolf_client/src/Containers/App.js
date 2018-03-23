import React from 'react'
import socketIOClient from "socket.io-client"

import AvalonDesktop from './AvalonDesktop'
import AvalonMobile from './AvalonMobile'

import '../SASS/_app.css'

/*
 This should be the router?
 */

 //interesting ... if you use ternary it has to be within a div or maybe just jsx templating?

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: '',
			attendingPlayers: 0,
			userName: '',
			mainKey:'',
			roomKey:'',
		 	response: false,
		 	endpoint: "http://127.0.0.1:8000"
		};
		this.socket = socketIOClient(this.state.endpoint);

		//response
		this.socket.on("game_start", data => {
			this.setState({mainKey: data.newGame._id, attendingPlayers: data.newGame.players.length})
		});
		this.socket.on("wrong_room", data => this.setState({ response: data }));
		this.socket.on("playerConfirm", data => {
			this.setState({attendingPlayers: this.state.attendingPlayers + 1})
		});

		this.playerNumber = this.playerNumber.bind(this)
		this.playerName	= this.playerName.bind(this)
	}

	playerNumber(playerPop) {
		this.setState({players: playerPop})
		this.socket.emit("playerPop", {playerPop: playerPop})
	}

	playerName(userID, roomID) {
		this.setState({userName: userID, roomKey: roomID})
		this.socket.emit("playerEnter", {userName: userID, roomKey: roomID})
	}

	render() {
		const isMobile = window.innerWidth <= 500
		// Need to pass a check that Room Key and Main Key match

		return isMobile 
			? <AvalonMobile
				userLogin={this.playerName}
				userName={this.state.userName}
			/>
			: <AvalonDesktop
				mainKey={this.state.mainKey}
				attendingPlayers={this.state.attendingPlayers}
				playerPop={this.state.players}
				onPopulationInput={this.playerNumber}
			/>
	}
}

export default App