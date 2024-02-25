/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. *//* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SinglePlayer(){
   
let {playerID} = useParams()
let {playerName} = useParams()
let {playerBreed} = useParams()
let {playerStatus} = useParams()
let {playerImage} = useParams()

return (
<>
   <p>Player ID: {playerID}</p>
   <p>Player Name: {playerName}</p>
   <p>Player Breed: {playerBreed}</p>
   <p>Player Status: {playerStatus}</p>
   <p>Player Name: {playerImage}</p>
</>
    )


}
    
  