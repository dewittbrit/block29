import React, { useState } from "react";

export default function CreatePlayerForm () {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('');
    const [image, setImage] = useState(null); 
    
    async function handleSubmit(event){
      event.preventDefault()
      try{
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players", {
          method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          breed: breed,
          status: status,
          image: image
        })
      })
        const result = await response.json()
        console.log(result)
        
      } catch(err){
              console.error(err)
      }
}
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Breed:</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Create Player</button>
      </form>
    );
  };
  
