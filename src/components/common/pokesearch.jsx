import { Input } from "@chakra-ui/react";
import { useState } from "react";

const Pokesearch = ({ onChange }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onChange(newQuery);
  };

  return (
    <Input
      placeholder="Search by Pokemon name"
      value={query}
      onChange={handleChange}
    />
  );
};

export default Pokesearch;
