import React, { useState, useEffect } from 'react';

const SearchPlayer = () => {
  const [query, setQuery] = useState('');
  const [puppyDetails, setPuppyDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() !== '') {
      setLoading(true);
      fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players?name=${query}`)
        .then(response => response.json())
        .then(data => {
          if(data.length > 0){
            setPuppyDetails(data[0]);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching puppy details:', error);
          setLoading(false);
        });
    } else {
      setPuppyDetails(null);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a puppy by name..."
      />
      {loading && <p>Loading...</p>}
      {puppyDetails && (
        <div>
          <h2>{puppyDetails.name}</h2>
          <p>Breed: {puppyDetails.breed}</p>
          <p>Status {puppyDetails.status}</p>
          <p>Image: {puppyDetails.image}</p>
         
        </div>
      )}
      {puppyDetails === null && !loading && query.trim() !== '' && (
        <p>No puppy found with name: {query}</p>
      )}
    </div>
  );
};

export default SearchPlayer;