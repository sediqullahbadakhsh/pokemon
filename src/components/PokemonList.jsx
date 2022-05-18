import React, { Component } from "react";
import Pokemon from "./Pokemon";

export default class PokemonList extends Component {
  constructor() {
    super();
  }
  //   renderPokemons() {
  //     let counter = 0;
  //     this.props.pokemonResult.map((pokemons) => {
  //       console.log(pokemons);
  //       return (
  //         <li key={counter++} className="card">
  //           name: {pokemons.pokemon.name}
  //         </li>
  //       );
  //     });
  //   }
  render() {
    let counter = 0;
    // console.log("list Props", this.props);
    // return (
    //   <div>{this.props.pokemonResult.length > 0 && <div>list loaded</div>}</div>
    // );
    if (this.props.pokemonResult.length > 0) {
      return (
        <ul>
          {this.props.pokemonResult.map((pokemons) => {
            console.log(pokemons);
            return (
              <Pokemon
                key={counter++}
                url={pokemons.pokemon.url}
                name={pokemons.pokemon.name}
              />
            );
          })}
        </ul>
      );
    }
    return <div>Still loading...</div>;
  }
}
