import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      showValues: false,
      imageURL: "",
      heigth: 0,
      weight: 0,
    };
  }
  onPokemonClick() {
    // console.log(this.props.url);
    fetch(this.props.url)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          showValues: true,
          heigth: data.heigth,
          weight: data.weight,
          imageURL: data.sprites.front_default,
        });
      })
      .catch((error) => console.log(error));
  }
  onClose() {
    this.setState({
      showValues: false,
    });
  }
  render() {
    if (!this.state.showValues) {
      return (
        <li onClick={this.onPokemonClick.bind(this)} className="card">
          name: {this.props.name}
        </li>
      );
    } else if (this.state.showValues) {
      return (
        <li onClick={this.onClose.bind(this)} className="card">
          <div>
            <div className="row">
              <p>name: {this.props.name}</p>
              <p>name: {this.props.heigth}</p>
              <p>name: {this.props.weight}</p>
            </div>
            <div>
              <img alt={this.state.name} src={this.state.imageURL} />
            </div>
          </div>
        </li>
      );
    } else {
      return <div></div>;
    }
  }
}
