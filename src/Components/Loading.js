import React from "react";

import "./styles/loading.css";

export default class Loading extends React.Component {
  componentDidMount() {
    const loading = document.querySelector(".Loading");
    loading.classList.add("appear");
  }

  componentWillUnmount() {
    const loading = document.querySelector(".Loading");
    loading.classList.add("desappear");
  }

  render() {
    return <div className="Loading"></div>;
  }
}
