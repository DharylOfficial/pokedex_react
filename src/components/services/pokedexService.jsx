import http from "./httpService";

function getPokemon() {
  const apiEndpoint = `http://127.0.0.1:8000/api/pokemon/`;
  return http.get(apiEndpoint);
}

function getPokemonWithId(id) {
  const apiEndpoint = `http://127.0.0.1:8000/api/pokemon/${id}/`;
  return http.get(apiEndpoint);
}

function postPokemon(data) {
  const apiEndpoint = `http://127.0.0.1:8000/api/pokemon/`;
  return http.post(apiEndpoint, data);
}

function patchPokemon(id, data) {
  const apiEndpoint = `http://127.0.0.1:8000/api/pokemon/${id}/`;
  return http.patch(apiEndpoint, data);
}

function deletePokemon(id) {
  const apiEndpoint = `http://127.0.0.1:8000/api/pokemon/${id}/`;
  return http.delete(apiEndpoint);
}

function getTypes() {
  const apiEndpoint = `http://127.0.0.1:8000/api/type/`;
  return http.get(apiEndpoint);
}

function resetPokedex() {
  const apiEndpoint = `http://127.0.0.1:8000/api/reset/`;
  return http.post(apiEndpoint, { reset: true });
}

const pokedexService = {
  getPokemon,
  getPokemonWithId,
  postPokemon,
  patchPokemon,
  deletePokemon,

  getTypes,
  resetPokedex,
};

export default pokedexService;
