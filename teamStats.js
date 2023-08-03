/*We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.*/

const team = {
  _players: [
    {firstName: 'Cristiano', lastName: 'Ronaldo', age: 38},
    {firstName: 'Lionel', lastName: 'Messi', age: 36},
    {firstName: 'Neymar', lastName: 'Jr', age: 34}
  ],
  _games: [
    {opponent: 'Milan', teamPoints: 4, opponentPoints: 0},
    {opponent: 'Juventos', teamPoints: 4, opponentPoints: 1},
    {opponent: 'Bayern', teamPoints: 3, opponentPoints: 4}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  }, 

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
    newFirstName,
    newLastName,
    newAge
    }
    team._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      newOpponent,
      newTeamPoints,
      newOpponentPoints
    }
    team._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Manschester City', 1, 0);
console.log(team.players)
console.log(team.games)