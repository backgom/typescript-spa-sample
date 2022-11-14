import IPlugin from './common/IPlugin';
import Router from './plugins/Router';
import routes from './routers';

class App {
  private _root: HTMLElement | null;
  private _plugin: any[];

  constructor() {
    this._root = null;
    this._plugin = [];
  }

  use(plugin: any) {
    this._plugin.push(plugin);
  }

  private routing() {
    const [router] = this._plugin.filter((plugin: any) => {
      return plugin.getPluginName() === 'router';
    });

    if (typeof router !== 'object') {
      return;
    }

    router.run();
  }

  mount(id: string) {
    this._root = document.querySelector(id);

    window.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target as HTMLAnchorElement;

        if (target.matches('[data-link]')) {
          history.pushState(null, '', target.href);
          this.routing();
        }
      });

      window.addEventListener('popstate', () => {
        this.routing();
      });

      this.routing();
    });
  }
}

export default App;
