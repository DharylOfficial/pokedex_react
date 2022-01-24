import { Button, Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex py="20px">
      <Link to="/">
        <Box p="2">
          <Heading size="md">Simple Pokedex</Heading>
        </Box>
      </Link>
      <Spacer />
      <Box>
        <Link to="/new">
          <Button colorScheme="teal" mr="4">
            New Pokemon
          </Button>
        </Link>
        <Button colorScheme="teal">Recreate Pokedex</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
