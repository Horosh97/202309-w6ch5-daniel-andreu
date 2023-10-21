import type { FilteredPokemonData, PokemonData } from "./types";

export const getPokemonById = async (
  pokemonUrl: string,
): Promise<FilteredPokemonData> => {
  const response = await fetch(pokemonUrl);
  const pokemonData = (await response.json()) as PokemonData;

  const filteredPokemonData: FilteredPokemonData = {
    name: pokemonData.name,
    image: pokemonData.sprites.front_shiny,
  };
  return filteredPokemonData;
};
