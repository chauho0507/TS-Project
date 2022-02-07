import IRoute from "../interfaces/route";
import Dashboard from "../pages/dashboard";
import HomePage from "../pages/home";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },
  // {
  //   path: "/admin/products",
  //   name: "Products",
  //   component: HomePage,
  //   exact: true,
  // },
  // {
  //   path: "/admin/customers",
  //   name: "Customers",
  //   component: HomePage,
  //   exact: true,
  // },
  // {
  //   path: "/admin/reports",
  //   name: "Reports",
  //   component: HomePage,
  //   exact: true,
  // },
  // {
  //   path: "/admin/integrations",
  //   name: "Integrations",
  //   component: HomePage,
  //   exact: true,
  // },
];

export default routes;
