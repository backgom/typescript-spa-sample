class Input {
  private _target;
  constructor(props?: any) {
    this._target = document.createElement('input') as HTMLInputElement;
    this._target.type = 'text';
    this._target.value = props.input;
    this._target.placeholder = '값을 입력하세요.';
    this._target.addEventListener('keyup', () => {
      props.onChange(this._target.value);
    });
  }

  render(): HTMLElement {
    return this._target;
  }
}

export default Input;
