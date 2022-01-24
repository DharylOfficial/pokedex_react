import { Badge, Box, Image, Stack, Text } from "@chakra-ui/react";

const Pokecard = (pokemon) => {
  function showPokemon() {
    console.log(pokemon.image_url);
  }

  return (
    <Box as="button" p="5" maxW="320px" borderWidth="1px">
      <Image
        borderRadius="md"
        src={pokemon.image_url}
        fallbackSrc="https://bit.ly/dan-abramov"
      />
      <Stack direction="row" mt="5px">
        <Badge>Normal{showPokemon()}</Badge>
        <Badge colorScheme="green">Grass</Badge>
        <Badge colorScheme="red">Fire</Badge>
        <Badge colorScheme="purple">Psychic</Badge>
      </Stack>
      <Text mt={2} fontSize="xl" fontWeight="semibold" align="left">
        {pokemon.name}
      </Text>
    </Box>
  );
};

export default Pokecard;
