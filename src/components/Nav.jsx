import React from 'react';
import { useCurrentUser } from '../Contexts/userContext';

const Nav = (props) => {
  const { setAvatarUrl, avatarUrl } = useCurrentUser();
  const { searchValue, searchSetValue } = props;
  return (
    <div>
      <img src='KritikzLogo.png' alt='' />
      <ul id='navlist'>
        <input
          type='text'
          value={searchValue}
          onChange={(e) => {
            searchSetValue(e.target.value);
          }}
        />
        <input
          placeholder='context'
          type='text'
          value={avatarUrl}
          onChange={(e) => {
            setAvatarUrl(e.target.value);
          }}
        />
      </ul>
    </div>
  );
};

export default Nav;
