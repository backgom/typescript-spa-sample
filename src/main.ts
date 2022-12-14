import App from './App';
import Router from './Router';
import routes from './routers';

const app = new App();
const router = new Router(routes);

app.use(router);
app.mount('#app');
