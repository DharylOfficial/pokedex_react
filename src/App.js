import "./App.css";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Pokedex from "./components/screens/pokedex";
import Navbar from "./components/common/navbar";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
