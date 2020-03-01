import React from "react";

import "./styles/viewcharacter.css";

export default function ViewCharacter(props) {
  return (
    <div className="ViewCharacter">
      <div className="ViewCharacter__principalInfo">
        <img
          className="ViewCharacter__principalInfo-image"
          src={props.image}
          alt={`${props.name} avatar`}
        />
        <h2 className="ViewCharacter__principalInfo-name">- {props.name} -</h2>
      </div>

      <ul className="ViewCharacter__moreInfo">
        <div className="ViewCharacter__moreInfo-infoBlock">
          <li>
            <p>Status:</p>
            {props.status === "Alive" && (
              <p className="Alive">{props.status}</p>
            )}
            {props.status === "Dead" && <p className="Dead">{props.status}</p>}
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

        <div className="ViewCharacter__moreInfo-infoBlock">
          <li>
            <p>Origin:</p>
            <p className="ViewCharacter__moreInfo-Origin">{props.origin}</p>
          </li>

          <li>
            <p>Actual Location:</p>
            <p>{props.location}</p>
          </li>
        </div>

        <div className="ViewCharacter__moreInfo-infoBlock">
          <li>
            <p>Is in: </p>
            {props.numberEpisodes === 1 && (
              <p>
                <strong className="numberEpisodes">
                  {props.numberEpisodes}
                </strong>{" "}
                episode
              </p>
            )}
            {props.numberEpisodes > 1 && (
              <p>
                <strong className="numberEpisodes">
                  {props.numberEpisodes}
                </strong>{" "}
                episodes
              </p>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
}
