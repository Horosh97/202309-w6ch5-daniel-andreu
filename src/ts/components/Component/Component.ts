abstract class Component {
  protected readonly element: Element;

  constructor(
    protected parentElement: Element,
    tagName: string,
    className: string
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;

    parentElement.appendChild(this.element);
  }

  public render(): void {
    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected abstract populate(): void;
}

export default Component;
