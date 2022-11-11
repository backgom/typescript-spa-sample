import Home from '../pages/Home';
import IPage from '../pages/IPage';
import SamplePage from '../pages/SamplePage';
import Suggestion from '../pages/Suggestion';

const routes: Routes[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/sample-page',
    component: SamplePage,
  },
  {
    path: '/suggestion',
    component: Suggestion,
  },
];

export interface Routes {
  path: string;
  component: any;
}

export default routes;
