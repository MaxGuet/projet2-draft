import React from 'react';
import '../../styles/sidebar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonPlatform from '../ButtonPlatform';
import ButtonGenre from '../ButtonGenre';
import { useCurrentUser } from '../../Contexts/userContext';

function SortContainer({ setPlatform, setGenre }) {
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [classGenre, setClassGenre] = useState(true);
  const { avatarUrl } = useCurrentUser();
  console.log(avatarUrl);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/genres?key=453247c1c78a4a88aa6594a59227801b`
      )
      .then((response) => setGenreList(response.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/platforms?key=453247c1c78a4a88aa6594a59227801b`
      )
      .then((response) => setPlatformList(response.data.results));
  }, []);
  return (
    <div id='sidebar'>
      <ul>
        <li className='roll'>
          <h1>{avatarUrl}</h1>
          <h3>Platform </h3>

          <ul className='submenu'>
            {platformList.map((platform) => (
              <ButtonPlatform
                classGenre={classGenre}
                platform={platform}
                setPlatform={setPlatform}
                type='button'
                key={platform.id}
                className='button platform-button'
              />
            ))}
          </ul>
        </li>
      </ul>
      <br />
      <br />
      <ul>
        <li className='roll'>
          <h3>Genre :</h3>
          <span
            className='start-btn'
            onClick={() => {
              setClassGenre(!classGenre);
            }}
          >
            RESET
          </span>
          <ul className='submenu'>
            {genreList.map((genre) => (
              <ButtonGenre
                classGenre={classGenre}
                genre={genre}
                setGenre={setGenre}
                type='button'
                key={genre.id}
                onClick={() => {
                  setGenre(genre.slug);
                }}
                className=' button genre-button'
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SortContainer;
