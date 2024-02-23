// import {  useState, useEffect } from 'react';
// // import { postPlayer } from '../API/FunctionHandler.js';
// // import classes from './NewplayerForm.module.css';
// // import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';


// export default NewPlayerForm = () => {  
//     const [puppyName, setPuppyName] = useState("");
//     const [puppyBreed, setPuppyBreed] = useState("");
//     const [playerStatus, setPlayerStatus] = useState("bench");
//     const [imageUrl, setImageUrl] = useState("");

//     async function handleSubmit(event){
//         event.preventDefault()
//         try{
//                   const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players", {
//                     method: "POST",
//                   headers: {
//                     'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify({
//                     puppyName: puppyName,
//                     puppyBreed: puppyBreed,
//                     playerStatus: playerStatus,
//                     imageUrl: imageUrl
//                   })
//                 })
//                   const result = await response.json()
//                   console.log(result)
                  
//                 } catch(err){
//                         console.error(err)
//                 }
//     }
// return (
// <>
//         <form onSubmit={handleSubmit}> 
//             <label> Puppy Name:</label>
//             <input value={puppyName} onChange={(event)=>setPuppyName(event.target.value)}></input>
//             <br></br>
//             <label> Puppy Breed:</label>
//             <input value={puppyBreed} onChange={(event)=>setPuppyBreed(event.target.value)}></input>
//             <br></br>
//             <label> Player Status:</label>
//             <input value={playerStatus} onChange={(event)=>setPlayerStatus(event.target.value)}></input>
//             <br></br>
//             <label> Image</label>
//             <input value={imageUrl} onChange={(event)=>setImageUrl(event.target.value)}></input>
//             <br></br>        
//             <button>Submit</button>
//         </form>
// </>
// )
// }
