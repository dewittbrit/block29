import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Puppies() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players"
        );
        const result = await response.json();
        console.log(result);
        setPlayers(result.data.players);
      } catch (err) {
        console.error(err);
      }
    }
    getPlayers();
  }, []);
console.log(players)


async function handleDelete(playerId) {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players/${playerId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete player");
    }
    // Update the players state by removing the deleted player
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
  } catch (error) {
    console.error("Error deleting player:", error);
  }
}

return (
  <>
    {players &&
      players.map((player) => {
        return (
          <div key={player.id}>
            <p>{player.name}</p>
            <p>{player.breed}</p>
            <p>{player.status}</p>
            <img src={player.image} alt={player.name} />
            <Link to={`/player/${player.id}/${player.name}/${player.breed}/${player.status}/${player.image}`}>
              <button>See Player ID</button>
            </Link>
            <button type="button" onClick={() => handleDelete(player.id)}>Delete Player</button>
          </div>
        );
      })}
  </>
);
}