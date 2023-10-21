import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "main-container");

    parentElement.appendChild(this.element);
  }

  populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        
    `;
  }
}

export default App;
