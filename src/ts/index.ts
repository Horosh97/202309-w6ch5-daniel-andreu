import type { Pokemon } from "./types.js";
import type { PokemonResponse } from "./types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (apiUrl: string): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise.results;
};

const pokemons = await getPokemons(apiUrl);

console.log(pokemons);
