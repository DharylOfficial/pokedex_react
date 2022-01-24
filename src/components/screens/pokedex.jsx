import { SimpleGrid } from "@chakra-ui/react";
import { Component } from "react";
import Pokecard from "../common/pokecard";

import pokedexService from "../services/pokedexService";

class Pokedex extends Component {
  state = {
    pokemon: [],
    types: [],
  };

  async componentDidMount() {
    const pokemonResult = await pokedexService.getPokemon();
    const pokemon = pokemonResult.data;

    const typesResult = await pokedexService.getTypes();
    const types = typesResult.data;

    this.setState({ pokemon, types });
  }

  render() {
    const pokemonList = this.state.pokemon.map((pokemon) => {
      return <Pokecard pokemon={pokemon} key={pokemon.id} />;
    });

    return (
      <div>
        <SimpleGrid my="5px" columns={3} spacing="10px">
          <Pokecard
            pokemon={{
              name: "Bulbasaur",
              image_url:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            }}
          />
          {pokemonList}
        </SimpleGrid>
      </div>
    );
  }
}

export default Pokedex;
