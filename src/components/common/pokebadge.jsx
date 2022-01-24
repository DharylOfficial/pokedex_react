import { Badge } from "@chakra-ui/react";
import { POKEMON_TYPE_COLOR } from "../constants/types";

const Pokebadge = ({ type_details }) => {
  return (
    <Badge style={{ backgroundColor: POKEMON_TYPE_COLOR[type_details.id] }}>
      {type_details.name.toUpperCase()}
    </Badge>
  );
};

export default Pokebadge;
