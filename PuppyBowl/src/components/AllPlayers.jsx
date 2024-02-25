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
  return (
    <>
      {players &&
        players.map((player) => {
          return (
            <div key={player.id}>
              <p>{player.name}</p>
              <Link to={`/player/${player.id}/${player.name}/${player.breed}/${player.status}/${player.image}`}>
                <p>{player.breed}</p>
                <p>{player.status}</p>
                <img>{player.image}</img>
                <button>See Player ID</button>
              </Link>
            </div>
          );
        })}
    </>
  );
}