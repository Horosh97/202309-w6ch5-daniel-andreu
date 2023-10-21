export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  prevous: string;
  results: Pokemon[];
}
