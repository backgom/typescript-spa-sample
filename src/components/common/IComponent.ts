interface IComponent {
  _target: HTMLElement;
  setView(view: HTMLElement | string): void;
}

export default IComponent;
