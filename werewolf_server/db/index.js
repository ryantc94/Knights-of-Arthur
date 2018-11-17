const mongoose = require('mongoose')
const { mongoDB } = require('../configuration.js')

const Character = new mongoose.Schema({
	name: String,
	politics: String
})

const Player = new mongoose.Schema({
	name: String,
	role: Character,
	team: [Character]
})

const Vote = new mongoose.Schema({
	player: Player,
	status: Boolean
})

const Round = new mongoose.Schema({
	decision: Boolean,
	playerVotes: [Vote]
})

const Mission = new mongoose.Schema({
	status: Boolean,
	rounds: [Round]
})

const Game = new mongoose.Schema({
	playerTotal: Number,
	playersEntered: Number,
	status: Boolean,
	players: [Player],
	missions: [Mission],
	characters: [Character],
	minions: [Character]
})

mongoose.model('Character', Character);
mongoose.model('Player', Player);
mongoose.model('Vote', Vote);
mongoose.model('Round', Round);
mongoose.model('Mission', Mission);
mongoose.model('Game', Game);

mongoose.connect(`mongodb://${mongoDB.username}:${mongoDB.password}@ds125872.mlab.com:25872/avalon`);

