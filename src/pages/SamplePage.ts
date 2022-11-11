import IPage from './IPage';

class SamplePage implements IPage {
  constructor(rootElement?: HTMLElement) {}
  render(): string {
    return `<h3>SamplePage</h3>`;
  }
}

export default SamplePage;
