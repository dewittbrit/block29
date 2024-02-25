// import React from "react";

// const DetailsButton = ({ name, breed, status, image }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p><strong>Breed:</strong> {breed}</p>
//       <p><strong>Status:</strong> {status}</p>
//       <img src={image} alt={name} />
//     </div>
//   );
// };

// export default DetailsButton;

import React, { useState } from "react";

const DetailsButton = ({ id }) => {
    const [puppyDetails, setPuppyDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPuppyDetails = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.example.com/puppies/"${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch puppy details");
            }
            const data = await response.json();
            setPuppyDetails(result.data.player);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchPuppyDetails}>Fetch Details</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {puppyDetails && (
                <div>
                    <h2>{puppyDetails.name}</h2>
                    <p><strong>Breed:</strong> {puppyDetails.breed}</p>
                    <p><strong>Status:</strong> {puppyDetails.status}</p>
                    <img src={puppyDetails.image} alt={puppyDetails.name} />
                </div>
            )}
        </div>
    );
};

export default DetailsButton;