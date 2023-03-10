import Header from './components/Header';
import './styles/App.css';
import React from 'react';
import GamesList from './components/container/GamesList';
import { useState } from 'react';
import GameDescription from './components/container/GameDescription';
import SideBarContainer from './components/container/SideBarContainer';
import { CurrentUserProvider } from './Contexts/userContext';

function App() {
  const [value, setValue] = useState('');
  const [platform, setPlatform] = useState('1');
  const [genre, setGenre] = useState(3);
  console.log(genre);
  const [gameId, setGameId] = useState('');
  const [platformName, setPlatformName] = useState('');

  return (
    <CurrentUserProvider>
      <div id='global-div'>
        <Header searchValue={value} searchSetValue={setValue} />
        <SideBarContainer
          platform={platform}
          setPlatform={setPlatform}
          genre={genre}
          setGenre={setGenre}
          setPlatformName={setPlatformName}
          platformName={platformName}
        />
        <GamesList
          searchValue={value}
          platform={platform}
          setPlatform={setPlatform}
          genre={genre}
          setGenre={setGenre}
          gameId={gameId}
          setGameId={setGameId}
          platformName={platformName}
          className='games-list'
        />
        <GameDescription gameId={gameId} />
      </div>
    </CurrentUserProvider>
  );
}

export default App;
