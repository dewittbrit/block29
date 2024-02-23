import React,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Puppies from './components/AllPlayers'

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
