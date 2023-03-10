import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useCurrentUser } from '../../Contexts/userContext';
const GameDescription = ({ gameId, setuser }) => {
  const { avatarUrl } = useCurrentUser();
  const [dataId, setDataId] = useState('');
  const [trailer, setTrailer] = useState('');
  console.log(gameId);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${gameId}?key=453247c1c78a4a88aa6594a59227801b`
      )
      .then((res) => setDataId(res.data));
    axios
      .get(
        `https://api.rawg.io/api/games/${gameId}/movies?key=453247c1c78a4a88aa6594a59227801b`
      )
      .then((response) => setTrailer(response.data.results[0].data));
  }, [gameId, trailer]);

  return (
    <div id='game-description'>
      <h1>{avatarUrl}</h1>
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
