import IPage from './IPage';

class Home implements IPage {
  constructor(rootElement?: HTMLElement) {}

  render(): string {
    return `<h3>Home</h3>`;
  }
}

export default Home;
