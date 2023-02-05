import Header from './components/Header';
import './App.css';
import React from 'react';
import GamesList from './components/container/GamesList';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [platform, setPlatform] = useState('4');
  const [genre, setGenre] = useState('action');

  return (
    <div>
      <Header searchValue={value} searchSetValue={setValue} />
      <GamesList
        searchValue={value}
        platform={platform}
        setPlatform={setPlatform}
        genre={genre}
        setGenre={setGenre}
        className='games-list'
      />
    </div>
  );
}

export default App;
