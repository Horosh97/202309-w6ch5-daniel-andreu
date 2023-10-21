import type { PokemonResponse } from "./types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (apiUrl: string): Promise<PokemonResponse> => {
  const response = await fetch(apiUrl);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise;
};

const actualPokemons = await getPokemons(apiUrl);

export const getNextPokemons = async (): Promise<PokemonResponse> =>
  getPokemons(actualPokemons.next);

export const getPreviousPokemons = async (): Promise<PokemonResponse> =>
  getPokemons(actualPokemons.previous);
