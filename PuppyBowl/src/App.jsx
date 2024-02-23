import React,{ useState } from 'react'
import SinglePlayer from './components/SinglePlayer'
// import './App.css'
import Puppies from './components/AllPlayers'
// import Navigations from './components/NavBar'
// import NewPlayerForm from './components/NewPlayerForm'
import {Link, Routes, Route} from 'react-router-dom'
// import NewPlayerForm from './components/NewPlayerForm'

 function App() {
  const [players, setPlayers] = useState([])
  const getPlayers = async ()=>{
  try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players'
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }}
  return (
    <>
<Puppies/>
    </>
  )
}

export default App
