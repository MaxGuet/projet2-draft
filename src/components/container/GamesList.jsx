import React, { useEffect,useState } from 'react'
import Game from '../Game'
import axios from "axios"





const GamesList = (props) => {
  const {searchValue} = props
  
const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get(
      "https://api.rawg.io/api/games?key=5e731b63837f49759cde8b1cb3505d80"
    )
    .then((res) => setData(res.data.results));
}, []);


    return (
      <div id="list">
        {data.filter((gameChoice)=>gameChoice.name.toLowerCase().includes(searchValue)).map((game, index) =>(
          <Game key={index} game={game} />
        ))}
          </div>
    )

}

export default GamesList
