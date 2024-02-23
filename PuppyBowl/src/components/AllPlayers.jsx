import { useState, useEffect } from "react"
import {Link, Routes, Route} from 'react-router-dom'

export default function Puppies(){
    const [players, setPlayers] = useState(null)

    useEffect(()=>{
        async function getPlayers(){
        try{
          const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players")
          const result = await response.json()
          console.log(result)
          setPlayers(result.players)
        } catch(err){
                console.error(err)
        }
            }    getPlayers()
    }, [])

return(
<>
{players.map(player=>{
    return <p>{player.name}</p>
})}
</>
)
}