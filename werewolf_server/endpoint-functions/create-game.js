require('../db')
const mongoose = require('mongoose')
const Game = mongoose.model('Game');
const Character = mongoose.model('Character');

const createCharacter = (name, politics) => {
  /*
    Note: Model.save() returns a promise so you can't add it directly to the charcterList
    you have to first save the Model to a variable push that to the character list
    and then save the variable holding the new Model.
  */
  
  return new Character({
    name: name,
    politics: politics
  })
}

const populateMinions = (minionList, characterList, totalMinions) => {
  for(let i = 0; i < totalMinions; i++) {
    const minion = createCharacter(`Minion_${i + 1}`, "evil")
    characterList.push(minion)
    minionList.push(minion)
  }
}

const populateKnights = (characterList, totalKnights) => {
  for(let i = 0; i < totalKnights; i++) {
    characterList.push(createCharacter(`Knight_${i + 1}`, "good"))
  }
}

const populateGame = (characterList) => {
  characterList.push(createCharacter("Morgana", "evil"))
  characterList.push(createCharacter("Assassin", "evil"))
  characterList.push(createCharacter("Percavil", "good"))
  characterList.push(createCharacter("Merlin", "good"))
}

const createGame = (socket, { totalPlayers }) => {
  const game = new Game({
    playerNumber: parseInt(totalPlayers),
    playersEntered: 0,
    status: false,
    players: [],
    missions: [],
    characters: [],
    minions: []
  })
  const totalMinions = totalPlayers <= 6 ? 2 : 3;
  const totalKnights = parseInt(totalPlayers) - totalMinions
  populateGame(game.characters)
  populateMinions(game.minions, game.characters, totalMinions)
  populateKnights(game.characters, totalKnights)
  game.save()
  socket.emit('game-start', {newGame: game})
}


module.exports = createGame
