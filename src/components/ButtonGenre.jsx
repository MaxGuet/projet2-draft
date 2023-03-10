import React from 'react';
import { useState } from 'react';
import '../styles/sidebar.css';

const ButtonGenre = ({ genre, setGenre, classGenre }) => {
  const [classTitle, setClassTitle] = useState('');

  function handleClick() {
    setClassTitle((classTitle) => !classTitle);
  }

  let classChecked = classTitle && classGenre ? 'bright-genre' : null;

  return (
    <button
      className={`button genre-button ${classChecked}`}
      onClick={() => {
        setClassTitle(classChecked);
        setGenre(genre.id);
        handleClick();
      }}
    >
      {genre.name}
    </button>
  );
};

export default ButtonGenre;
