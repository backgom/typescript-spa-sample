import IPage from './IPage';

class NotFound implements IPage {
  constructor(rootElement?: HTMLElement) {}
  render(): string {
    return '<h3>404</h3>';
  }
}

export default NotFound;
