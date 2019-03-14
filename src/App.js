//because we have data that changes, we must create a stateful component
import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js';

class Game extends Component {
  constructor () {
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
    }
}


    playGame = () => {
      this.setState({
        playerOne: this.signs[Math.floor(Math.random() * this.signs.length)],
        playerTwo: this.signs[Math.floor(Math.random() * this.signs.length)],
      })
}

decideWinner = () =>{
  const playerOne = this.state.playerOne;
  const playerTwo = this.state.playerTwo;

  if(playerOne === playerTwo){
    return "It's a Tie!"
  }
  else if((playerOne === "rock" && playerTwo === "scissors")|| (playerOne === "scissors" && playerTwo === "rock")|| (playerOne === "paper" && playerTwo === "rock")){
  return "Player One Wins!";
}
else{
  return "Player Two Wins!";
}
}

  render() {
    return(
    <div className="style">
      <div>
    <PlayerCard sign={this.state.playerOne} />
    <PlayerCard sign={this.state.playerTwo}/>
    </div>
    <div className="winner">
    Place the winner here
      </div>
    <button type="button" onClick={this.playGame}>Play the Game</button>
    </div>
  );
  }
}

export default Game;
