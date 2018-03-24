/**
 * Module dependencies.
 */

require('./db.js')
var mongoose = require('mongoose')
var Game = mongoose.model('Game');
var Player = mongoose.model('Player');
var Character = mongoose.model('Character');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var debug = require('debug')('werewolf-server:server');
var socketIO = require('socket.io');


var index = require('./routes/index');

/**
 * Create HTTP server.
 */

var app = express();
var httpServer = http.createServer(app);
var wsServer = socketIO(httpServer);

// Websocket Code
wsServer.on('connect', function(socket) {
	console.log('Socket ID: ' + socket.id + ', Connected');

  // So I guess socket passes data arg to the callback? def need to search up and document how callbacks work tomorrow
  socket.on('playerPop', function(data){
    //9 player 3 minion
    //8 player 3 minion
    //7 player 3 minion
    //6 players 2 minion
    var characters = {
      1: "Morgana",
      2: "Assassin",
      3: "Percavil",
      4: "Merlin",
      5: "Minion of Mordred",
      6: "Knight of Arthur"
    }
    var totalMinions = data.playerPop <= 6 ? 2 : 3;
    var playersToKnights = (parseInt(data.playerPop) - totalMinions)
    var characterList = []

    /*
      Note: Model.save() returns a promise so you can't add it directly to the charcterList
      you have to first save the Model to a variable push that to the character list
      and then save the variable holding the new Model.
    */
    for(var i = 0; i < 4; i++){
      var newCharacter = new Character({
        _id: i,
        name: characters[i],
        distribution: false
      });
      characterList.push(newCharacter)
      newCharacter.save();
    }
    for(var i = 4; i < playersToKnights; i++) {
      var newCharacter = new Character({
        _id: i,
        name: characters[6],
        distribution: false
      });
      characterList.push(newCharacter)
      newCharacter.save();
    }
    for(var i = playersToKnights; i < parseInt(data.playerPop); i++) {
      var newCharacter = new Character({
        _id: i,
        name: characters[5],
        distribution: false
      });
      characterList.push(newCharacter)
      newCharacter.save();
    }
    var newGame = new Game({
      _id: socket.id,
      playerNumber: data.playerPop,
      characters: characterList
    }).save(function(err, game) {
      /*
        Note: Adding the above Character logic in this save wouldn't work
        because it wouldn't probably save the game changes after adding them to the game data.
        So if I wanted it to be in this save how would I do it?
      */
      socket.emit('game_start', {newGame: game})
    });
  });

  socket.on('playerEnter', function(data){
    Game.findOne({_id: data.roomKey}, function(err, game){
      //error is only populated when there is an actual error
      if(game === null) {
        socket.emit('wrong_room', {wrongRoom: true})
        return
      }
      var stop = true
      var ranNum;
      while(stop) {
        ranNum = Math.floor(Math.random() * parseInt(game.playerNumber));
        if(!game.characters[ranNum].distribution) {
          game.characters[ranNum].distribution = true;
          game.characters[ranNum].playerName = data.userName;
          stop = false;
        }
      }
      new Player({
        name: data.userName,
        position: game.characters[ranNum]
      }).save(function(error, player) {
        socket.broadcast.emit('playerConfirm', {playerInfo: player})
      });
    });
  });

  


  socket.on('disconnect', function(){
    console.log('Socket ID: ' + socket.id + ', Disconnected');
  });
});

// Express Code

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use([path,] callback [, callback...])
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
	Routes
*/
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);

module.exports = app;
