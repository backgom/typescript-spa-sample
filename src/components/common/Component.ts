class Component {
  protected _parent: HTMLElement | undefined;

  constructor({ parent }: any) {
    this._parent = parent;
  }
}

export default Component;
