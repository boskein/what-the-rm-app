import React from "react";
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
      error: false
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true });

    const API_URL = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(API_URL);
    const characters = await response.json();

    this.setState({
      data: characters,
      loading: false,
      error: false
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return <CharacterList characters={this.state.data.results} />;
  }
}
