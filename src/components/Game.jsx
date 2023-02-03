import React from 'react'
import "../components/list.css"
import "../components/list.css"






const Game = ({ game }) => {
    
    return (
        
        <div id="game">
            <h1>{game.name}</h1> <br />
            <img src={game.background_image} alt={game.name} id="game-image"/><br />
            
            <h3>Rating: {game.rating}</h3><br />
            {game.genres.map((genre) => (<p> {genre.name} </p>))}
        </div>
    )
}

export default Game
