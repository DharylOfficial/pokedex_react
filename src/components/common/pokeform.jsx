import _ from "lodash";
import {
  Badge,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import loadingImage from "../../images/loading-chemical.gif";
import { titleCase } from "../utilities";
import { POKEMON_TYPE_COLOR } from "../constants/types";

const Pokeform = ({ pokemon, onChange, types }) => {
  const formTypeCheckboxes = () => {
    const typeCheckboxes = types.map((type) => {
      const checked = _.indexOf(pokemon.types, type.id) >= 0;
      return (
        <Checkbox
          key={type.id}
          name="type"
          value={parseInt(type.id)}
          isChecked={checked}
          colorScheme="teal"
          onChange={onChange}
        >
          <Badge style={{ backgroundColor: POKEMON_TYPE_COLOR[type.id] }}>
            {type.name.toUpperCase()}
          </Badge>
        </Checkbox>
      );
    });
    return typeCheckboxes;
  };

  const formFieldPokemonId = () => {
    return (
      <FormControl>
        <FormLabel>Pokemon ID</FormLabel>
        <Input name="id" type="text" value={pokemon.id} onChange={onChange} />
      </FormControl>
    );
  };

  const formFieldPokemonName = () => {
    return (
      <FormControl>
        <FormLabel>Pokemon Name</FormLabel>
        <Input
          name="name"
          type="text"
          value={titleCase(pokemon.name)}
          onChange={onChange}
        />
      </FormControl>
    );
  };

  const formFieldPokemonImageURL = () => {
    return (
      <FormControl>
        <FormLabel>Pokemon Image</FormLabel>
        <Input
          name="image_url"
          type="text"
          value={pokemon.image_url}
          onChange={onChange}
        />
      </FormControl>
    );
  };

  const formFieldPokemonTypes = () => {
    return (
      <FormControl>
        <FormLabel>Pokemon Types</FormLabel>
        <SimpleGrid columns={5}>{formTypeCheckboxes()}</SimpleGrid>
      </FormControl>
    );
  };

  return (
    <SimpleGrid columns={2}>
      <Image
        borderRadius="md"
        src={pokemon.image_url}
        fallbackSrc={loadingImage}
        boxSize="320px"
      />
      <VStack spacing={4} align="stretch">
        {formFieldPokemonId()}
        {formFieldPokemonName()}
        {formFieldPokemonTypes()}
        {formFieldPokemonImageURL()}
      </VStack>
    </SimpleGrid>
  );
};

export default Pokeform;
