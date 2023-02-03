import React, { useEffect, useState } from 'react';
import Game from '../Game';
import axios from 'axios';

const GamesList = (props) => {
  const { searchValue, platform } = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=5e731b63837f49759cde8b1cb3505d80&platforms=${platform}&search=${searchValue}&page_size=5&page=${page}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    }, 700);

    return () => clearTimeout(timeout);
  }, [page, searchValue, platform]);

  return (
    <div id='list'>
      <button onClick={() => setPage(page - 1)}> Page précédente</button>
      {data
        .filter((gameChoice) => gameChoice.name.toLowerCase())
        .map((game, index) => (
          <Game key={index} game={game} />
        ))}
      <button onClick={() => setPage(page + 1)}> Page suivante</button>
    </div>
  );
};

export default GamesList;
