import IRoute from "../interfaces/route";
import Dashboard from "../pages/dashboard";
import HomePage from "../pages/home";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    exact: true,
    items: [
      {
        id: "h1",
        name: "Overview",
        path: "/overview",
      },
      {
        id: "h2",
        name: "Updates",
        path: "/updates",
      },
      {
        id: "h3",
        name: "Reports",
        path: "/reports",
      },
    ],
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
    items: [
      {
        id: "d1",
        name: "Overview",
        path: "/admin/overview",
      },
      {
        id: "d2",
        name: "Weekly",
        path: "/admin/weekly",
      },
      {
        id: "d3",
        name: "Monthly",
        path: "/admin/monthly",
      },
      {
        id: "d4",
        name: "Annually",
        path: "/admin/annually",
      },
    ],
  },
  {
    path: "/admin/orders",
    name: "Orders",
    component: HomePage,
    exact: true,
    items: [
      {
        id: "o1",
        name: "New",
        path: "/admin/new",
      },
      {
        id: "o2",
        name: "Processed",
        path: "/admin/processed",
      },
      {
        id: "o3",
        name: "Shipped",
        path: "/admin/shipped",
      },
      {
        id: "o4",
        name: "Returned",
        path: "/admin/returned",
      },
    ],
  },
  {
    path: "/admin/products",
    name: "Products",
    component: HomePage,
    exact: true,
    items: [],
  },
  // {
  //   path: '/admin/customers',
  //   name: 'Customers',
  //   component: HomePage,
  //   exact: true,
  //   items: [],
  // },
  // {
  //   path: '/admin/reports',
  //   name: 'Reports',
  //   component: HomePage,
  //   exact: true,
  //   items: [],
  // },
  // {
  //   path: '/admin/integrations',
  //   name: 'Integrations',
  //   component: HomePage,
  //   exact: true,
  //   items: [],
  // },
];

export default routes;
