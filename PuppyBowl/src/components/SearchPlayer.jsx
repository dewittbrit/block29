import React, { useState, useEffect } from "react";

function PuppySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    async function searchPuppies() {
      try {
            
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2110-FTB-ET-WEB-PT/players`, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();
        console.log(data.data.players)
        const filteredPuppies = data?.data?.players?.filter(player =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredPuppies);
      } catch (error) {
        console.error("Error searching puppies:", error);
      } finally {
        setLoading(false);
      }
    }

    searchPuppies();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for puppies..."
        value={searchTerm}
        onChange={handleChange}
      />
      {loading && <p>Loading...</p>}
      {!loading && searchResults && searchResults.length === 0 && <p>No results found</p>}
      {!loading && searchResults && searchResults.length > 0 && (
        <ul>
          {searchResults.map((players) => (
            <li key={players.id}>{players.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PuppySearch;