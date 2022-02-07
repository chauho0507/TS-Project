import IRoute from '../interfaces/route';
import Dashboard from '../pages/dashboard';
import HomePage from '../pages/home';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    exact: true,
    items: [
      {
        id: 'h1',
        name: 'Overview',
      },
      {
        id: 'h2',
        name: 'Updates',
      },
      {
        id: 'h3',
        name: 'Reports',
      },
    ],
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
    items: [
      {
        id: 'd1',
        name: 'Overview',
      },
      {
        id: 'd2',
        name: 'Weekly',
      },
      {
        id: 'd3',
        name: 'Monthly',
      },
      {
        id: 'd4',
        name: 'Annually',
      },
    ],
  },
  {
    path: '/admin/orders',
    name: 'Orders',
    component: HomePage,
    exact: true,
    items: [
      {
        id: 'o1',
        name: 'New',
      },
      {
        id: 'o2',
        name: 'Processed',
      },
      {
        id: 'o3',
        name: 'Shipped',
      },
      {
        id: 'o4',
        name: 'Returned',
      },
    ],
  },
  {
    path: '/admin/products',
    name: 'Products',
    component: HomePage,
    exact: true,
    items: [],
  },
  {
    path: '/admin/customers',
    name: 'Customers',
    component: HomePage,
    exact: true,
    items: [],
  },
  {
    path: '/admin/reports',
    name: 'Reports',
    component: HomePage,
    exact: true,
    items: [],
  },
  {
    path: '/admin/integrations',
    name: 'Integrations',
    component: HomePage,
    exact: true,
    items: [],
  },
];

export default routes;
