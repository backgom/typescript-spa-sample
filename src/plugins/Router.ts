import IPlugin from '../common/IPlugin';
import Component from '../components/common/Component';
import NotFound from '../pages/NotFound';
import { Routes } from '../routers';

class Router implements IPlugin {
  public _name: string;
  private _routes: Routes[];
  private _root: HTMLElement | null;

  constructor(routes: Routes[]) {
    this._name = 'router';
    this._routes = routes;
    this._root = document.querySelector('#app');
  }

  getPluginName(): string {
    return this._name;
  }

  setRoot(id: string): void {
    const element = document.querySelector(id) as HTMLElement;
    if (typeof element !== 'object') {
      return;
    }
    this._root = element;
  }

  run() {
    const route = this._routes.find(
      (route) => route.path === window.location.pathname
    );

    if (typeof route !== 'object') {
      return;
    }

    const component = Reflect.construct(route.component, []);
    const render = component.render();

    if (this._root === null) {
      return;
    }

    if (typeof render === 'string') {
      this._root.innerHTML = render;
    } else if (typeof render === 'object') {
      this._root.innerHTML = '';
      this._root.appendChild(render);
    }
  }
}

export default Router;
