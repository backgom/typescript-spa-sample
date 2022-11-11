import IPlugin from './common/IPlugin';
import NotFound from './pages/NotFound';
import { Routes } from './routers';

class Router implements IPlugin {
  public _name: string;
  private _routes: Routes[];
  private _parent: HTMLElement | null;

  constructor(routes: Routes[]) {
    this._name = 'router';
    this._routes = routes;
    this._parent = null;
  }

  setParent(parent: HTMLElement) {
    this._parent = parent;
  }

  getPluginName(): string {
    return this._name;
  }

  getHtml(): string {
    const currentRoute = window.location.pathname;
    const [route] = this._routes.filter((route) => route.path === currentRoute);

    if (route === undefined) {
      const errorPage = new NotFound();

      return errorPage.render();
    }

    return new route.component(this._parent).render();
  }
}

export default Router;
