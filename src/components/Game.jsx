import React from 'react';
import '../styles/list.css';

const Game = (props) => {
  const { game, setGameId } = props;

  return (
    <div
      id='game'
      onClick={() => setGameId(game.id)}
      style={{ background: `url(${game.background_image}) center/cover` }}
    >
      <h1 id='game-name'>{game.name}</h1> <br />
    </div>
  );
};

export default Game;
