import IPage from './IPage';
import Input from '../components/suggestion/Input';

class Suggestion implements IPage {
  private _target: HTMLElement;

  constructor() {
    this._target = Suggestion.createElement();
  }

  static createElement(): HTMLElement {
    return document.createElement('div');
  }

  render(): HTMLElement {
    const inputComponent = new Input({});

    this._target.innerHTML = '';
    this._target.appendChild(inputComponent.render());

    return this._target;
  }
}

export default Suggestion;
