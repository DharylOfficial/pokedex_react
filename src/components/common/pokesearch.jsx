import { Input } from "@chakra-ui/react";

const Pokesearch = ({ onChange, value }) => {
  return (
    <Input
      placeholder="Search by Pokemon name"
      value={value}
      onChange={onChange}
      size="lg"
    />
  );
};

export default Pokesearch;
