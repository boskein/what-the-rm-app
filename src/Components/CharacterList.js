import React from "react";
import Character from "./Character";

import "./styles/characterlist.css";

export default function CharacterList(props) {
  return (
    <div className="CharacterList">
      <div className="CharacterList__header">
        <h2 className="CharacterList__header-title">Characters</h2>
        <p className="CharacterList__header-description">
          List of all characters of the series
        </p>
      </div>
      <div className="CharacterList__list">
        {props.characters.map(character => (
          <Character
            idCharacter={character.id}
            idkey={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        ))}
      </div>
      
    </div>
  );
}
