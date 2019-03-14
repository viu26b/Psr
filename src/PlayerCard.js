import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
  console.log(props.sign);
  return(
    <div className="playerCard">{props.sign}
    <img src={rock}/>
    <img src={scissors}/>
    <img src={paper}/>
    </div>
  )
};

export default PlayerCard;
