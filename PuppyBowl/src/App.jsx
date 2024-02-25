import React,{ useState } from 'react'
import SinglePlayer from './components/SinglePlayer'
import DetailsButton from './components/DetailsButton'
import Puppies from './components/AllPlayers'
import PlayerSearch from './components/SearchPlayer'

// import Navigations from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewPlayerForm from './components/NewPlayerForm'

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
    <PlayerSearch/>
<Routes>
        <Route path="/player/:id" element={<DetailsButton/>} />
      
    </Routes>
<NewPlayerForm/>
<SinglePlayer/>
<Puppies/>

    </>
  )
}

export default App
