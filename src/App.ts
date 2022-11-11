import IPlugin from './common/IPlugin';

class App {
  private _app: any;
  private _plugin: any[];

  constructor() {
    this._app = null;
    this._plugin = [];
  }

  use(plugin: any) {
    this._plugin.push(plugin);
  }

  render() {
    const [router] = this._plugin.filter((plugin: any) => {
      return plugin.getPluginName() === 'router';
    });

    const html = router.getHtml();
    if (typeof html === 'string') {
      this._app.innerHTML = html;
    }
  }

  mount(id: string) {
    this._app = document.querySelector(id);

    window.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target as HTMLAnchorElement;

        if (target.getAttribute('href')) {
          history.pushState(null, '', target.href);
          this.render();
        }
      });

      window.addEventListener('popstate', () => {
        this.render();
      });

      this.render();
    });
  }
}

export default App;
