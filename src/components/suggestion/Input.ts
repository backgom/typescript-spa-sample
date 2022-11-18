class Input {
  private _target;
  constructor(props?: any) {
    this._target = Input.createElement();
    this._target.type = 'text';
    this._target.value = props.input;
    this._target.placeholder = '값을 입력하세요.';
    this._target.addEventListener('keyup', async (e) => {
      await props.onChange(this._target.value);
    });
  }

  static createElement(): HTMLInputElement {
    return document.createElement('input');
  }

  focus() {
    this._target.focus();
  }

  render(): HTMLElement {
    return this._target;
  }
}

export default Input;
