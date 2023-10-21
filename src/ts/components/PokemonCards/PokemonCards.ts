import type { Pokemon } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonCards extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemons: Pokemon[],
  ) {
    super(parentElement, "ul", "pokemon-cards");
  }

  protected populate(): void {
    this.pokemons.forEach((pokemon) => {
      const listElement = document.createElement("li");
      this.element.appendChild(listElement);

      const pokemonCard = new PokemonCard(listElement, pokemon);
      pokemonCard.render();
    });
  }
}
export default PokemonCards;
