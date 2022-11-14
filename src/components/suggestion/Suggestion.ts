class Suggestion {
  private _target: HTMLElement;
  private _state: any;

  constructor(props?: any) {
    this._target = Suggestion.createElement();
    this._target.classList.add('box');
    this._state = {
      exist: true,
    };
  }

  static createElement(): HTMLElement {
    return document.createElement('div');
  }

  render(): HTMLElement {
    if (this._state.exist === true) {
      this._target.classList.add('show');
    } else {
      this._target.classList.remove('show');
    }

    return this._target;
  }
}

export default Suggestion;
