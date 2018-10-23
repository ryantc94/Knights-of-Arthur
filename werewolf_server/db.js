var mongoose = require('mongoose')
const { mongoDB } = require('./configuration.js')

var Character = new mongoose.Schema({
	_id: Number,
	name: String,
	playerName: String,
	distribution: Boolean
});

var Player = new mongoose.Schema({
	name: String,
	position: Character
	//in the future should add image
});

var Game = new mongoose.Schema({
	_id: String, 
	playerNumber: String,
	players: [Player],
	characters: [Character]
});

mongoose.model('Game', Game);
mongoose.model('Player', Player);
mongoose.model('Character', Character);

//huh..... look into this code
// is the environment variable, NODE_ENV, set to PRODUCTION? 
// if (process.env.NODE_ENV == 'PRODUCTION') {
// 	// if we're in PRODUCTION mode, then read the configration from a file
// 	// use blocking file io to do this...
// 	var fs = require('fs');
// 	var path = require('path');
// 	var fn = path.join(__dirname, 'config.json');
// 	var data = fs.readFileSync(fn);

// 	// our configuration file will be in json, so parse it and set the
// 	// conenction string appropriately!
// 	var conf = JSON.parse(data);
// 	var dbconf = conf.dbconf;
// } else {
// // if we're not in PRODUCTION mode, then use
// 	dbconf = mongoose.connect('mongodb://localhost/koaDB')
// }

mongoose.connect(`mongodb://${mongoDB.username}:${mongoDB.password}@ds125872.mlab.com:25872/avalon`);

