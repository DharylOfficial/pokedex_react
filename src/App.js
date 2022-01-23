import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Pokedex from "./components/screens/pokedex";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
