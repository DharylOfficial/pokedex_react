import { Box, Flex, Spacer, Button, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pokedexService from "../services/pokedexService";

import Pokeform from "../common/pokeform";

const PokedexDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    types: [],
    image_url: "",
  });

  useEffect(() => {
    pokedexService.getTypes().then((response) => {
      setTypes(response.data);
    });
  }, []);

  useEffect(() => {
    if (params.id !== "new") {
      pokedexService.getPokemonWithId(params.id).then((response) => {
        setPokemon(response.data);
      });
    } else {
      setPokemon({
        id: "",
        name: "",
        types: [],
        image_url: "",
      });
    }
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "type") {
      setPokemon(updatePokemonType(e.target));
    } else {
      const updatedPokemon = { ...pokemon };
      updatedPokemon[name] = value;
      setPokemon(updatedPokemon);
    }
  };

  const updatePokemonType = ({ checked, value }) => {
    const updatedPokemon = { ...pokemon };

    if (checked) {
      updatedPokemon.types.push(parseInt(value));
    } else {
      updatedPokemon.types = updatedPokemon.types.filter((type) => {
        return type !== parseInt(value);
      });
    }
    return updatedPokemon;
  };

  const handleSave = (e) => {
    if (params.id === "new") {
      doSave();
    } else {
      doUpdate();
    }
  };

  const doSave = () => {
    pokedexService.postPokemon(pokemon).then((response) => {
      if (response.status === 201) {
        toast({
          title: "Pokedex Updated",
          description:
            "Now continue with your Pokemon adventure. Gotta catch them all!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate(`/pokemon/${response.data.id}`);
      }
    });
  };

  const doUpdate = () => {
    pokedexService.patchPokemon(pokemon.id, pokemon).then((response) => {
      if (response.status === 200) {
        toast({
          title: "Pokedex Updated",
          description:
            "Now continue with your Pokemon adventure. Gotta catch them all!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  const handleDelete = (e) => {
    pokedexService.deletePokemon(pokemon.id).then((response) => {
      if (response.status === 204) {
        toast({
          title: "Pokedex Updated",
          description: "Pokemon now extinct. Gotta catch what's left!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
      navigate("/");
    });
  };

  const formPokeform = () => {
    return <Pokeform pokemon={pokemon} onChange={handleChange} types={types} />;
  };

  const formPokeformControls = () => {
    return (
      <Box my="30px">
        <Flex>
          <Spacer />
          <Button colorScheme="red" onClick={handleDelete} me="10px">
            Delete
          </Button>
          <Button colorScheme="teal" onClick={handleSave}>
            Save
          </Button>
        </Flex>
      </Box>
    );
  };

  return (
    <div>
      {formPokeform()}
      {formPokeformControls()}
    </div>
  );
};

export default PokedexDetails;
