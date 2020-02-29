import React from "react";

import "./styles/characterlist.css";
import CharacterList from "./CharacterList";
import Loading from "./Loading";

export default class CharacterListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        results: []
      },
      loading: false,
      error: false,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true });

    const API_URL = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`;
    const response = await fetch(API_URL);
    const characters = await response.json();

    this.setState({
      data: {
        results: [].concat(this.state.data.results, characters.results)
      },
      loading: false,
      error: false,
      page: this.state.page + 1
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <CharacterList characters={this.state.data.results} />
        <button
          className="LoadMoreContent-button"
          onClick={() => this.fetchCharacters()}
        >
          Load more...
        </button>
      </React.Fragment>
    );
  }
}
