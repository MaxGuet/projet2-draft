import React from 'react';
import '../../../src/sidebar.css';

const SideBarContainer = (props) => {
  const { setPlatform } = props;
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
              <p title='3'>Aventure</p>
            </li>
            <li>
              <p title='4'>Action</p>
            </li>
            <li>
              <a href='' title='fps'>
                FPS
              </a>
            </li>
            <li>
              <a href='' title='horreur'>
                Horreur
              </a>
            </li>
            <li>
              <a href='' title='survie'>
                Survie
              </a>
            </li>
            <li>
              <a href='' title='str'>
                STR
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBarContainer;
