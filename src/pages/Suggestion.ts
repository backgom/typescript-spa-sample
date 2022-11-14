import IPage from './IPage';
import InputComponent from '../components/suggestion/Input';
import SuggestionComponent from '../components/suggestion/Suggestion';

class Suggestion implements IPage {
  private _target: HTMLElement;
  private _state: any;

  constructor(props?: any) {
    this._target = Suggestion.createElement();
    this._state = { ...props };
    this.onChange = this.onChange.bind(this);
  }

  static createElement(): HTMLElement {
    return document.createElement('div');
  }

  onChange(value: string) {
    this._state.input = value;
  }

  render(): HTMLElement {
    const inputComponent = new InputComponent({
      input: (this._state.input = 'Suggestion!!'),
      onChange: this.onChange,
    });

    const suggestionComponent = new SuggestionComponent();

    this._target.innerHTML = '';
    this._target.appendChild(inputComponent.render());
    this._target.appendChild(suggestionComponent.render());

    return this._target;
  }
}

export default Suggestion;
