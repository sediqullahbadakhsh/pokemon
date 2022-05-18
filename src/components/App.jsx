import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "1",
      pokemonList: [],
    };
  }
  onSelectTypeChange(event) {
    // console.log("selectchange", event.target.value);
    this.setState({ type: event.target.value });
  }
  onButtonClick(event) {
    event.preventDefault();
    // console.log(this.state.type + "this button clicked");
    const API_URL = "https://pokeapi.co/api/v2/type/3/";
    fetch(API_URL)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data.pokemon);
        this.setState({ pokemonList: data.pokemon });
      })
      .catch((error) => console.log(error));
  }
  render() {
    console.log(this.state);
    return (
      <div className="container app-container">
        <div>
          <h4>our small pokemon app</h4>
          <form>
            <label>choose your pokemon type</label>
            <br />
            <select onChange={this.onSelectTypeChange.bind(this)}>
              <option value="1">normal</option>
              <option value="2">fighting</option>
              <option value="3">flying</option>
              <option value="4">poison</option>
            </select>
            <button
              onClick={this.onButtonClick.bind(this)}
              className="btn btn-success"
            >
              search for type
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
