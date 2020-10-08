import React, { useState } from "react";

const StarWarsCharacter = ({ character }) => {
  const [characterDetailsOpen, setCharacterDetailsOpen] = useState(false);

  const handleOpen = () => {
    setCharacterDetailsOpen(!characterDetailsOpen);
  };

  const handleClose = () => {
    setCharacterDetailsOpen(!characterDetailsOpen);
  };

  return (
    <div
      className={
        characterDetailsOpen
          ? "star-wars-character OPEN"
          : "star-wars-character"
      }
    >
      <div>
        <div onClick={handleOpen} className="star-wars-character-name">
          {character.name}
        </div>
        <div onClick={handleOpen} className="read-details">
          Read more about me
        </div>
      </div>
      <div className="star-wars-character-details">
        <div className="star-wars-character-detail">Name: {character.name}</div>
        <div className="star-wars-character-detail">
          Birth year: {character.birth_year}
        </div>
        <div className="star-wars-character-detail">
          Gender: {character.gender}
        </div>
        <div className="star-wars-character-detail">
          Height: {character.height}
        </div>
        <div className="star-wars-character-detail">Mass: {character.mass}</div>
        <div className="star-wars-character-detail">
          Hair color: {character.hair_color}
        </div>
        <div onClick={handleClose} className="close-details">
          <img src="/close.png" alt="close"></img>
        </div>
      </div>
    </div>
  );
};

export default StarWarsCharacter;
