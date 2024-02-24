import React, { useState } from "react";

const CreatePlayerForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    const [status, setStatus] = useState('');
    const [image, setImage] = useState(null);  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Basic validation
      if (!name || !breed || !status || !image) {
        alert('Please fill out all fields');
        return;
      }
      // Create player object
      const newPlayer = {
        name: name,
        breed: breed,
        status: status,
        image: image
      };
      // Pass new player object to parent component
      onSubmit(newPlayer);
      // Clear form fields
      setName('');
      setBreed('');
      setStatus('');
      setImage(null);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
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
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Create Player</button>
      </form>
    );
  };
  
  export default CreatePlayerForm;