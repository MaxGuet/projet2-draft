import React, { useEffect, useState } from 'react';
import Game from '../Game';
import axios from 'axios';
import SideBarContainer from './SideBarContainer';

const GamesList = (props) => {
  const { searchValue, setGameId, gameId } = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState('4');
  const [genre, setGenre] = useState('action');

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=5e731b63837f49759cde8b1cb3505d80&genres=${genre}&platforms=${platform}&search=${searchValue}&page_size=5&page=${page}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    }, 700);

    return () => clearTimeout(timeout);
  }, [page, searchValue, platform, genre]);

  return (
    <div id='list'>
      <SideBarContainer
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
      />
      <button onClick={() => setPage(page - 1)}> Page précédente</button>
      {data
        .filter((gameChoice) => gameChoice.name.toLowerCase())
        .map((game, index) => (
          <Game
            key={index}
            game={game}
            data={data}
            gameId={gameId}
            setGameId={setGameId}
          />
        ))}
      <button onClick={() => setPage(page + 1)}> Page suivante</button>
    </div>
  );
};

export default GamesList;
