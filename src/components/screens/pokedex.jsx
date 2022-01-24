import { SimpleGrid } from "@chakra-ui/react";
import { Component } from "react";
import Pokecard from "../common/pokecard";
import Pokesearch from "../common/pokesearch";

import pokedexService from "../services/pokedexService";

class Pokedex extends Component {
  state = {
    pokemon: [],
    types: [],
    query: "",
  };

  async componentDidMount() {
    const pokemonResult = await pokedexService.getPokemon();
    const pokemon = pokemonResult.data;

    const typesResult = await pokedexService.getTypes();
    const types = typesResult.data;

    this.setState({ pokemon, types });
  }

  onQueryChange = (query) => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    const pokemonList = this.prepareData();

    return (
      <div>
        <Pokesearch onChange={this.onQueryChange} value={query} />
        <SimpleGrid my="5px" columns={3} spacing="10px">
          {pokemonList}
        </SimpleGrid>
      </div>
    );
  }

  prepareData() {
    const filteredData = this.filterData();
    return this.listData(filteredData);
  }

  filterData() {
    return this.state.pokemon.filter((pokemon) => {
      return pokemon.name.includes(this.state.query.toLowerCase());
    });
  }

  listData(filteredData) {
    return filteredData.map((pokemon) => {
      return <Pokecard pokemon={pokemon} key={pokemon.id} />;
    });
  }
}

export default Pokedex;
