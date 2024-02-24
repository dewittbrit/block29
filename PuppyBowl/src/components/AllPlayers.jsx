// import { useState, useEffect } from "react"
// import {Link, Routes, Route} from 'react-router-dom'

// export default function Puppies(){
//     const [players, setPlayers] = useState([])

//     useEffect(()=>{
//         async function getPlayers(){
        
//         try{
//           const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players")
//           const result = await response.json()
//           console.log(result)
//           setPlayers(result.data.players)
//         } catch(err){
//                 console.error(err)
//         }
//             }    getPlayers()
//     }, [])
// console.log(players)


// async function seeDetails(id){
//     try{
//         const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players"+id, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           available: false,
//         })
//       })
//         const result = await response.json()
//         console.log(result)
//         setSeePlayerDetails(result)
//       } catch(err){
//               console.error(err)
//       }

// }




// return(
// <>
// {players && players.map(player=>{
//     return <p key={player.id}>{player.name}</p>

// })}
// </>
// )
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      {players &&
        players.map((player) => {
          return (
            <div key={player.id}>
              <Link to={`/player/${player.id}`}>
                <p>{player.name}</p>
              </Link>
            </div>
          );
        })}
    </>
  );
}