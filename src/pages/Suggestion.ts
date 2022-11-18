import IPage from './IPage';
import InputComponent from '../components/suggestion/Input';
import SuggestionComponent from '../components/suggestion/Suggestion';
import api from '../common/api';
import { debounce } from '../common/util';

class Suggestion implements IPage {
  private _target: HTMLElement;
  private _state: any;

  constructor(props?: any) {
    this._target = Suggestion.createElement();
    this._state = { ...props, input: '', productList: [] };
    this.onChange = this.onChange.bind(this);
  }

  static createElement(): HTMLElement {
    return document.createElement('div');
  }

  async onChange(value: string) {
    this._state.input = value;

    const response = await api.get(
      `https://dummyjson.com/products/search?q=${value}`
    );

    this._state.productList = response.products;

    this.render();
  }

  render(): HTMLElement {
    const inputComponent = new InputComponent({
      input: this._state.input,
      onChange: debounce(this.onChange, 500),
    });

    const suggestionComponent = new SuggestionComponent({
      productList: this._state.productList as [],
    });

    this._target.innerHTML = '';
    this._target.appendChild(inputComponent.render());

    this._target.appendChild(suggestionComponent.render());
    inputComponent.focus();

    return this._target;
  }
}

export default Suggestion;
