import React from "react";

import "./styles/character.css";

export default function Character(props) {
  const imageStyle = {
    width: "100%",
    height: "250px",
    backgroundImage: `url('${props.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <li className="Character" key={props.idkey}>
      <div className="Character__image" style={imageStyle} />
      <div className="Character__info">
        <h2 className="Character__info-name">{props.name}</h2>
        <div className="Character__subInfo">
          <p className="Character__info-specie">
            <strong>Specie:</strong> {props.species}
          </p>
          {props.status === "Alive" && (
            <p className="Character__info-statusAlive">{props.status}</p>
          )}
          {props.status === "Dead" && (
            <p className="Character__info-statusDead">{props.status}</p>
          )}
        </div>
      </div>
    </li>
  );
}
