import React from 'react';
import '../../../src/sidebar.css';

const SideBarContainer = (props) => {
  const { setPlatform, setGenre } = props;
  return (
    <div id='sidebar'>
      <ul>
        <li className='roll'>
          <a href='' title='plateforme'>
            Plateforme
          </a>

          <ul className='submenu'>
            <li>
              <p title='4' onClick={(e) => setPlatform(e.target.title)}>
                PC
              </p>
            </li>
            <li>
              <p title='18' onClick={(e) => setPlatform(e.target.title)}>
                Playstation 4
              </p>
            </li>
            <li>
              <p title='187' onClick={(e) => setPlatform(e.target.title)}>
                Playstation 5
              </p>
            </li>
            <li>
              <p title='14' onClick={(e) => setPlatform(e.target.title)}>
                Xbox 360
              </p>
            </li>
            <li>
              <p title='186' onClick={(e) => setPlatform(e.target.title)}>
                Xbox series X|S
              </p>
            </li>
            <li>
              <p title='7' onClick={(e) => setPlatform(e.target.title)}>
                Switch
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li className='roll'>
          <a href='' title='genre'>
            Genre
          </a>

          <ul className='submenu'>
            <li>
              <p title='3' onClick={(e) => setGenre(e.target.title)}>
                Aventure
              </p>
            </li>
            <li>
              <p title='action' onClick={(e) => setGenre(e.target.title)}>
                Action
              </p>
            </li>
            <li>
              <p title='adventure' onClick={(e) => setGenre(e.target.title)}>
                Indie
              </p>
            </li>
            <li>
              <p title='strategy' onClick={(e) => setGenre(e.target.title)}>
                Strategy
              </p>
            </li>
            <li>
              <p title='casual' onClick={(e) => setGenre(e.target.title)}>
                Casual
              </p>
            </li>
            <li>
              <p title='simulation' onClick={(e) => setGenre(e.target.title)}>
                Simulation
              </p>
            </li>
            <li>
              <p title='arcade' onClick={(e) => setGenre(e.target.title)}>
                Arcade
              </p>
            </li>
            <li>
              <p title='racing' onClick={(e) => setGenre(e.target.title)}>
                Racing
              </p>
            </li>
            <li>
              <p title='sports' onClick={(e) => setGenre(e.target.title)}>
                Sports
              </p>
            </li>
            <li>
              <p title='family' onClick={(e) => setGenre(e.target.title)}>
                Family
              </p>
            </li>
            <li>
              <p
                title='role-playing-games-rpg'
                onClick={(e) => setGenre(e.target.title)}
              >
                RPG
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBarContainer;
