import App from "./components/App/App.js";
import type { PokemonResponse } from "./types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = async (apiUrl: string): Promise<PokemonResponse> => {
  const response = await fetch(apiUrl);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise;
};

export const actualPokemons = await getPokemons(apiUrl);

const bodyElement = document.querySelector("body")!;
const appElement = new App(bodyElement);
appElement.render();

export const getNextPokemons = async (): Promise<PokemonResponse> =>
  getPokemons(actualPokemons.next);

export const getPreviousPokemons = async (): Promise<PokemonResponse> =>
  getPokemons(actualPokemons.previous);
