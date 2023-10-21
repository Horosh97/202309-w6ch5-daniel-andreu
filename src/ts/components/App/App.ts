import { actualPokemons } from "../../index.js";
import Component from "../Component/Component.js";
import PokemonCards from "../PokemonCards/PokemonCards.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");

    parentElement.appendChild(this.element);
  }

  populate(): void {
    this.element.innerHTML = `
    <header class="main-header">
    <img class="main-logo" src="../../../img/pokemon_logo.svg">
    </header>
    <main class="main">
    </main>        
    `;

    const main = document.querySelector(".main")!;
    const pokemonCards = new PokemonCards(main, actualPokemons.results);
    pokemonCards.render();
  }
}

export default App;
