import React from "react";

import "./styles/home.css";
import { Link } from "react-router-dom";
import CharacterListContainer from "../Components/CharacterListContainer";

export default function Home() {
  return (
    <div className="Home">
      <header className="Home__header">
        <p className="Home__header-littleText">An app for</p>
        <h1 className="Home__header-titlePage">Rick and Morty</h1>
        <p className="Home__header-fans">Fans</p>
        <p className="Home__header-descriptionApp">
          Just a training app, here you can see all the characters of the
          series, search by name and see more information about each character.
          <br />
          <span>
            If you want to see more thecnical information about the construction
            of this app <Link to="/about">you can!</Link>
          </span>
        </p>
      </header>
      <main className="Home__main">
        <CharacterListContainer />
      </main>
    </div>
  );
}
