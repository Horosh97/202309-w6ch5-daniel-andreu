export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonData {
  name: string;
  sprites: {
    front_shiny: string;
  };
}

export interface FilteredPokemonData {
  name: string;
  image: string;
}
