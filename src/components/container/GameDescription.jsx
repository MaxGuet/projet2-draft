import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const GameDescription = (props) => {
  const { gameId } = props;
  const [dataId, setDataId] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${gameId}?key=5e731b63837f49759cde8b1cb3505d80`
      )
      .then((res) => setDataId(res.data));
  }, [gameId]);
  return (
    <div>
      <h1>{dataId.name}</h1>
      <img src={dataId.background_image} alt='' width='400px' />
      <p>
        Note Metacritic: <strong>{dataId.metacritic}</strong>
      </p>
      <br />
      <p>{dataId.description}</p>
    </div>
  );
};

export default GameDescription;
