import React from "react";
import Loading from "../Components/Loading";
import ViewCharacter from "../Components/ViewCharacter";
import CharacterListContainer from "../Components/CharacterListContainer";

export default class ViewCharacterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        origin: {},
        location: {},
        episode: []
      },
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.fetchSingleCharacter();
  }

  fetchSingleCharacter = async () => {
    this.setState({ loading: true });

    const API_SINGLE_CHARACTER = `https://rickandmortyapi.com/api/character/${this.props.match.params.cId}/`;

    const response = await fetch(API_SINGLE_CHARACTER);
    const singleCharacter = await response.json();

    this.setState({
      data: singleCharacter,
      loading: false,
      error: false
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const { data } = this.state;

    return (
      <React.Fragment>
        <ViewCharacter
          name={data.name}
          image={data.image}
          status={data.status}
          specie={data.species}
          gender={data.gender}
          location={data.location.name}
          origin={data.origin.name}
          numberEpisodes={data.episode.length}
        />
      </React.Fragment>
    );
  }
}
