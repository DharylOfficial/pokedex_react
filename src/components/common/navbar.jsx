import { Button, Flex, Box, Heading, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex py="20px">
      <Box p="2">
        <Heading size="md">Simple Pokedex</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
