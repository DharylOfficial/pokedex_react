import {
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  SimpleGrid,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pokedexService from "../services/pokedexService";
import _ from "lodash";

import loadingImage from "../../images/loading-chemical.gif";
import { titleCase } from "../utilities";

const PokedexDetails = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const [options, setOptions] = useState();

  // SERVES AS COMPONENT DID MOUNT : useEffect(..., []);
  useEffect(() => {
    pokedexService.getTypes().then((response) => {
      const result = response.data.map((type) => {
        const { id, name } = type;
        return (
          <option key={id} value={id}>
            {titleCase(name)}
          </option>
        );
      });
      setOptions(result);
    });
  }, []);

  useEffect(() => {
    pokedexService
      .getPokemonWithId(params.id)
      .then((response) => setPokemon(response.data));
  }, [params.id]);

  return (
    <SimpleGrid columns={2}>
      <Image
        borderRadius="md"
        src={pokemon.image_url}
        fallbackSrc={loadingImage}
        boxSize="320"
      />
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel htmlFor="email">Pokemon ID</FormLabel>
          <Input id="id" type="text" value={pokemon.id} isDisabled={true} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Pokemon Name</FormLabel>
          <Input id="name" type="text" value={titleCase(pokemon.name)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Type 1</FormLabel>
          <Select
            placeholder="Select option"
            value={_.get(pokemon.types, 0, 0)}
          >
            {options}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Type 2</FormLabel>
          <Select
            placeholder="Select option"
            value={_.get(pokemon.types, 1, 0)}
          >
            {options}
          </Select>
        </FormControl>
      </VStack>
    </SimpleGrid>
  );
};

export default PokedexDetails;
