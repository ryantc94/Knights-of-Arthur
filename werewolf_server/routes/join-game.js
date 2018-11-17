require('../db')
const mongoose = require('mongoose')
const Game = mongoose.model('Game');
const Player = mongoose.model('Player');

const checkRoom = (gameRoom) =>{
  if(gameRoom === null) {
    socket.emit('wrong_room', {loginSuccess: false})
    return false
  }
  return true
}

const createPlayer = (username, role, team) => {
  new Player({
    name: userName,
    role: role,
    team: team
  }).save(function(error, player) {
    socket.emit('playerConfirm', {playerInfo: player, loginSuccess: true})
    socket.broadcast.emit('playerConfirm', {playerInfo: player, loginSuccess: true})
  });
}

const joinGame = (data) => {
  const {
    inputKey,
    userName
  } = data

  //error is only populated when there is an actual error, not finding is not an error
  Game.findOne({_id: inputKey}, function(err, game){

    if(checkRoom(game)){ return }

    const {
      playerTotal,
      characters,
      playersEntered,
      minions
    } = game
    const index = getRandomNumber(playerTotal - playersEntered)
    const role = characters.splice(index, 1)
    const team = role.politics === "evil" ? minions : undefined

    game.playersEntered += 1

    createPlayer(username, team)

    if(game.players.length === game.playerNumber) {
      game.status = true
      socket.emit('allPresent')
    }
  })
}

default export joinGame
