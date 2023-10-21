import { type Pokemon } from "../../types.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: Pokemon,
  ) {
    super(parentElement, "article", "pokemon-card");
  }

  protected populate(): void {
    this.element.innerHTML = ``;
  }
}

export default PokemonCard;
