import React from "react";

export default class App extends React.Component {
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

    const API_URL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(API_URL);
    const characters = await response.json();

    this.setState({
      data: characters,
      loading: false
    });
  };

  render() {
    if (this.state.loading) {
      return <p>loading...</p>;
    }

    return (
      <div className="App">
        <h1>Experimental fetch</h1>
        <ul>
          {this.state.data.results.map(charachter => (
            <li key={charachter.id}>
              <h2>{charachter.name}</h2>
              <p>{charachter.status}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
