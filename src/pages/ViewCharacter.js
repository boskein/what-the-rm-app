import React from "react";
import Loading from "../Components/Loading";

export default class ViewCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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

    return (
      <div>
        <h1>{this.state.data.name}</h1>
      </div>
    );
  }
}
