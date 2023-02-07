import Header from './components/Header';
import './App.css';
import React from 'react';
import GamesList from './components/container/GamesList';
import { useState } from 'react';
import GameDescription from './components/container/GameDescription';

function App() {
  const [value, setValue] = useState('');
  const [platform, setPlatform] = useState('4');
  const [genre, setGenre] = useState('action');
  const [gameId, setGameId] = useState('323');

  return (
    <div>
      <Header searchValue={value} searchSetValue={setValue} />
      <GamesList
        searchValue={value}
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        gameId={gameId}
        setGameId={setGameId}
        className='games-list'
      />
      <GameDescription gameId={gameId} />
    </div>
  );
}

export default App;
