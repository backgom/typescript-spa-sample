class Input {
  private _element;
  constructor({ onChange }: any) {
    this._element = document.createElement('input');
    this._element.type = 'text';
    this._element.placeholder = '값을 입력하세요.';
    this._element.addEventListener('keyup', () => {
      onChange();
    });
  }

  getElement() {
    return this._element;
  }

  render(): HTMLElement {
    return this._element;
  }
}

export default Input;
