import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");

    parentElement.appendChild(this.element);
  }

  populate(): void {
    throw new Error("Missing implementation");
  }
}

export default App;
