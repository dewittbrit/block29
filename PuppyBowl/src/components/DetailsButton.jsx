import React from "react";

const DetailsButton = ({ name, breed, status, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Breed:</strong> {breed}</p>
      <p><strong>Status:</strong> {status}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default DetailsButton;