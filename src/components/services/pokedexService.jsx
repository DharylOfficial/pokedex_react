import http from "./httpService";

function getPokemon() {
  const apiEndpoint = `http://127.0.0.1:8000/api/pokemon/`;
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

const pokedex = {
  getPokemon,
  postPokemon,
  patchPokemon,
  deletePokemon,
};

export default pokedex;
