import React, { Component } from "react";
import pokedex from "./services/pokedexService";

class Playground extends Component {
  state = {
    pokemon: [],
  };

  async componentDidMount() {
    // POST TEST
    const postResult = await pokedex.postPokemon({ name: "bbmon5" });
    console.log(postResult);

    // PATCH TEST
    const patchResult = await pokedex.patchPokemon(postResult.data.id, {
      ...postResult.data,
      name: "bbmon6",
    });
    console.log(patchResult);

    // DELETE TEST
    const deleteResult = await pokedex.deletePokemon(patchResult.data.id);
    console.log(deleteResult);

    // GET TEST
    const pokemon = await pokedex.getPokemon();
    this.setState({ pokemon });
    console.log(pokemon);
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default Playground;
