import React,{ useState } from 'react'
import Puppies from './components/AllPlayers'
import PlayerSearch from './components/SearchPlayer'
import Navigations from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

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
    <Navigations/>
    <PlayerSearch/>
    <NewPlayerForm/><br></br>
<Routes>
        {/* <Route path="/player/:id" element={<DetailsButton/>} /> */}
        <Route path='/' element={<Puppies/>} />
        <Route path="/player/:playerID/:playerName/:playerBreed/:playerStatus/:playerImage" element ={<SinglePlayer/>}/>
        
    </Routes>

{/* <SinglePlayer/> */}
{/* <Puppies/> */}

    </>
  )
}

export default App
