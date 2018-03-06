import React from "react";
import socketIOClient from "socket.io-client";
/*
	How does importing css work like this?
*/
import '../SASS/_header.css'

/* 
	This is a functional component.
	Note: In es6 templating you can pass back HTML as well.
*/
class Game extends React.Component {
	
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

	render() {
		const { response } = this.state;
		return (
		  <div style={{ textAlign: "center" }}>
		    {response
		      ? <p>
		          The temperature in Florence is: {response.text} °F
		        </p>
		      : <p>Loading...</p>}
		  </div>
		);
	}
}

export default Game