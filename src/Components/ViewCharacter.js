import React from "react";

export default function ViewCharacter(props) {
  return (
    <div>
      <img src={props.image} alt={`${props.name} avatar`} />
      <h2>{props.name}</h2>

      <ul>
        <div>
          <li>
            <p>Status:</p>
            <p>{props.status}</p>
          </li>

          <li>
            <p>Sepecie:</p>
            <p>{props.specie}</p>
          </li>

          <li>
            <p>Gender:</p>
            <p>{props.gender}</p>
          </li>
        </div>

        <div>
          <li>
            <p>Origin:</p>
            <p>{props.origin}</p>
          </li>

          <li>
            <p>Actual Location:</p>
            <p>{props.location}</p>
          </li>
        </div>

        <li>
          <p>Is in: </p>
          {props.numberEpisodes === 1 && <p>{props.numberEpisodes} episode</p>}
          {props.numberEpisodes > 1 && <p>{props.numberEpisodes} episodes</p>}
        </li>
      </ul>
    </div>
  );
}
