import "./App.css";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pokedex from "./components/screens/pokedex";
import Navbar from "./components/common/navbar";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ChakraProvider>
            <Container maxW="container.lg">
              <Navbar />
              <Routes>
                <Route path="/" element={<Pokedex />} />
              </Routes>
            </Container>
          </ChakraProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
