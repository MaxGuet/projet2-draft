import React, { useEffect, useState } from 'react';
import Game from '../Game';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Keyboard, Pagination, A11y } from 'swiper';

const GamesList = ({ searchValue, setGameId, gameId, platform, genre }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=453247c1c78a4a88aa6594a59227801b&genres=${genre}&platforms=${platform}&search=${searchValue}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchValue, platform, genre]);

  return (
    <div id='list'>
      <Swiper
        modules={[Navigation, A11y, Keyboard, Pagination]}
        pagination
        navigation
        a11y
        keyboard
        effect
        speed={800}
        slidesPerView={4}
        loop
        className='my-swiper'
      >
        {data
          .filter((gameChoice) => gameChoice.name.toLowerCase())
          .map((game) => (
            <SwiperSlide>
              <Game
                key={gameId}
                game={game}
                data={data}
                gameId={gameId}
                setGameId={setGameId}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default GamesList;
