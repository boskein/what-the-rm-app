import React from "react";

import "./styles/characterlist.css";
import CharacterList from "./CharacterList";
import Loading from "./Loading";

export default class CharacterListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        info: {},
        results: []
      },
      loading: false,
      error: false,
      numberEpisodes: {
        info: {}
      },
      page: 1
    };
  }

  componentDidMount() {
    this.fetchCharacters();
    this.fetchEpisodes();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true });

    const API_URL = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`;
    const response = await fetch(API_URL);
    const characters = await response.json();

    this.setState({
      data: {
        info: characters.info,
        results: [].concat(this.state.data.results, characters.results)
      },
      loading: false,
      error: false,
      page: this.state.page + 1
    });
  };

  fetchEpisodes = async () => {
    this.setState({ loading: true });

    const API_URL_EPISODE = `https://rickandmortyapi.com/api/episode/`;
    const response = await fetch(API_URL_EPISODE);
    const episodes = await response.json();

    this.setState({
      numberEpisodes: {
        info: episodes.info
      },
      loading: false,
      error: false
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <CharacterList
          characters={this.state.data.results}
          numberCharacters={this.state.data.info.count}
          numberEpisodes={this.state.numberEpisodes.info.count}
        />
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
