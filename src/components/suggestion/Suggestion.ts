interface State {
  display: boolean;
  productList: any[];
  currentTarget: number;
}

class Suggestion {
  private _target: HTMLElement;
  private _state: State;

  constructor(props?: any) {
    this._target = Suggestion.createElement();
    this._target.classList.add('box');
    this._target.id = 'suggestion';
    this._state = {
      display: Array.isArray(props.productList) && props.productList.length > 0,
      productList: props.productList,
      currentTarget: 0,
    };

    this._target.addEventListener('keyup', (e) => {
      const currentTarget = e.target as HTMLElement;

      if (e.key === 'ArrowUp') {
        const previousElement =
          currentTarget.previousElementSibling as HTMLElement;
        if (previousElement === null) {
          return;
        }
        previousElement.focus();
      } else if (e.key === 'ArrowDown') {
        const nextElement = currentTarget.nextElementSibling as HTMLElement;
        if (nextElement === null) {
          return;
        }
        nextElement.focus();
      }

      if (e.key === 'Enter') {
        const inputElement = this._target.parentElement?.querySelector(
          'input[type=text]'
        ) as HTMLInputElement;
        inputElement.value = currentTarget.innerText;
        this._target.classList.remove('show');
      }
    });
  }

  static createElement(): HTMLElement {
    return document.createElement('div');
  }

  render(): HTMLElement {
    if (this._state.display === true) {
      this._state.productList.map((product, index) => {
        const userContainer = document.createElement('div');
        userContainer.dataset.id = product.id;
        userContainer.dataset.key = `${index}`;
        userContainer.tabIndex = 0;
        userContainer.innerHTML = `<span>${product.title}</span>`;
        this._target.appendChild(userContainer);
      });
      this._target.classList.add('show');
    } else {
      this._target.classList.remove('show');
    }

    return this._target;
  }
}

export default Suggestion;
