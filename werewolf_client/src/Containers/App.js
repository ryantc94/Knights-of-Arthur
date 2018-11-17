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
    super()
    this.socket = socketIOClient(this.state.endpoint)

	  this.socket.on("game-start", data => {
      console.log(data)
  		this.setState({ roomKey: data.newGame._id, attendingPlayers: data.newGame.players.length })
  	})

    this.socket.on("playerConfirm", data => {
      this.setState({ attendingPlayers: this.state.attendingPlayers + 1 , loginSuccess: data.loginSuccess})
    })
  }

	state = {
		players: '',
		attendingPlayers: 0,
		userName: '',
		roomKey:'',
		inputKey:'',
		loginSuccess: undefined,
	 	response: false,
	 	endpoint: "http://127.0.0.1:8000"
	}

  playerNumber = this.playerNumber.bind(this);
  playerName = this.playerName.bind(this);

	playerNumber(totalPlayers) {
		this.setState({players: totalPlayers})
		this.socket.emit("create-game", { totalPlayers })
	}

	playerName(userID, roomID) {
		this.setState({userName: userID, inputKey: roomID})
		this.socket.emit("playerEnter", {userName: userID, inputKey: roomID})
	}

	render() {
		const isMobile = window.innerWidth <= 500
		// Need to pass a check that Room Key and Main Key matcha
		console.log('loginSuccess', this.state.loginSuccess)
		return isMobile 
			? <AvalonMobile
				userLogin={this.playerName}
				loginSuccess={this.state.loginSuccess}
			/>
			: <AvalonDesktop
				roomKey={this.state.roomKey}
				attendingPlayers={this.state.attendingPlayers}
				playerPop={this.state.players}
				onPopulationInput={this.playerNumber}
			/>
	}
}

export default App