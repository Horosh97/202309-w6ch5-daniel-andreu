import { type Pokemon } from "../../types";
import Component from "../Component/Component";

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
