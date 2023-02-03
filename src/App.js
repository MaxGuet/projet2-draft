import Header from './components/Header';
import './App.css';
import React from 'react';
import GamesList from './components/container/GamesList';
import { useState } from 'react';
import SideBarContainer from './components/container/SideBarContainer';

function App() {
  const [value, setValue] = useState('');
  const [platform, setPlatform] = useState('4');

  return (
    <div>
      <Header searchValue={value} searchSetValue={setValue} />
      <GamesList
        searchValue={value}
        platform={platform}
        setPlatform={setPlatform}
      />
      <SideBarContainer platform={platform} setPlatform={setPlatform} />
    </div>
  );
}

export default App;
