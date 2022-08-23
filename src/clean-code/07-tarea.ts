(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    getValue() {}
    isActive() {}
    removeValue() {}
    setFocus() {}
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    public attributes: InputAttributes;
    public events: InputEvents;
    public html: HtmlElement;

    constructor(id: string, value: string, placeholder: string) {
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
      this.html = new HtmlElement(id, "input");
    }
  }

  const nameField = new InputElement("name", "", "Nombre");
  console.log({ nameField });
})();
