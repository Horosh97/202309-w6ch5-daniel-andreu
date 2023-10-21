import type { FilteredPokemonData } from "../../types.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: FilteredPokemonData,
  ) {
    super(parentElement, "article", "pokemon-card");
  }

  protected async populate(): Promise<void> {
    this.element.innerHTML = `
    <div class="pokemon">
    <h3 class="pokemon-title">${this.pokemon.name}</h3>
    <img class="pokemon-img" src=${this.pokemon.image}>
    </div>
    `;
  }
}

export default PokemonCard;
