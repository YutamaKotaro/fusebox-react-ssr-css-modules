import {
  App,
  Home,
  About,
  NotFound,
} from './pages';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/about',
        component: About,
        exact: true,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];

export default routes;
