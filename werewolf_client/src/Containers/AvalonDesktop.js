
//??? i thought import was only used by nodeJS..
import React from "react"
import socketIOClient from "socket.io-client"

import Header from '../Components/Header'

/* ???
	How does importing css work like this?
*/
import '../SASS/_header.css'


class StartInterface extends React.Component {
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
		return (
			<Header />

		)
	};
}

export default StartInterface

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
