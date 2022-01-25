import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import loadingImage from "../../images/loading-chemical.gif";

import { titleCase } from "../utilities";
import Pokebadge from "./pokebadge";

const Pokecard = ({ pokemon }) => {
  function createBadges() {
    const badges = pokemon.type_details.map((details) => {
      return <Pokebadge key={details.id} type_details={details} />;
    });
    return badges;
  }

  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Center>
        <Link to={`/pokemon/${pokemon.id}`}>
          <Image
            borderRadius="md"
            src={pokemon.image_url}
            fallbackSrc={loadingImage}
            boxSize="100px"
          />
        </Link>
      </Center>
      <Center mt={5}>
        <Stack direction="row" mt="5px">
          {createBadges()}
        </Stack>
      </Center>
      <Center>
        <Text mt={2} fontSize="xl" fontWeight="semibold" align="left">
          {titleCase(pokemon.name)}
        </Text>
      </Center>
    </Box>
  );
};

export default Pokecard;
