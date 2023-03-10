import React from 'react';
import { useState } from 'react';
import '../styles/sidebar.css';

const ButtonPlatform = ({ platform, setPlatform }) => {
  const [classTitle, setClassTitle] = useState(false);

  function handleClick() {
    setClassTitle(!classTitle);
  }

  return (
    <button
      className={`button platform-button ${
        classTitle ? 'bright-platform' : ''
      }`}
      onClick={() => {
        setPlatform(platform.id);
        handleClick();
      }}
    >
      {platform.name}
    </button>
  );
};

export default ButtonPlatform;
