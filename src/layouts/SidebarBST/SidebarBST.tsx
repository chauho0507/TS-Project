import { FC } from "react";

import { useRouteMatch } from "react-router-dom";
import IMatchParams from "../../interfaces/matchParams";
import routes from "../../config/routes";
import SidebarItem from "../test";

const SidebarBST: FC = () => {
  const match = useRouteMatch<IMatchParams>();

  return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: 280 }}>
      <ul className="list-unstyled ps-0">
        {routes.map(route => (
          <SidebarItem
            name={route.name}
            items={route.items}
            path={match.path}
          />
        ))}
        {/* <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${
              !toggleSidebarItem.toggleHomeItem ? "collapsed" : ""
            }`}
            aria-expanded={toggleSidebarItem.toggleHomeItem}
            onClick={() =>
              setToggleSidebarItem(() => {
                return {
                  ...toggleSidebarItem,
                  toggleHomeItem: !toggleSidebarItem.toggleHomeItem,
                  activeItem: !toggleSidebarItem.activeItem,
                };
              })
            }
          >
            Home
          </button>
          <div
            className={
              !toggleSidebarItem.toggleHomeItem ? "collapse" : "collapse show"
            }
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/" className="link-dark rounded">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Updates
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${
              !toggleSidebarItem.toggleHomeItem ? "collapsed" : ""
            }`}
            aria-expanded={toggleSidebarItem.toggleDashboardItem}
            onClick={() =>
              setToggleSidebarItem(() => {
                return {
                  ...toggleSidebarItem,
                  toggleDashboardItem: !toggleSidebarItem.toggleDashboardItem,
                };
              })
            }
          >
            Dashboard
          </button>
          <div
            className={
              !toggleSidebarItem.toggleDashboardItem
                ? "collapse"
                : "collapse show"
            }
            id="dashboard-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/admin/dashboard" className="link-dark rounded">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Weekly
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Monthly
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Annually
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${
              !toggleSidebarItem.toggleOrderItem ? "collapsed" : ""
            }`}
            aria-expanded={toggleSidebarItem.toggleOrderItem}
            onClick={() =>
              setToggleSidebarItem(() => {
                return {
                  ...toggleSidebarItem,
                  toggleOrderItem: !toggleSidebarItem.toggleOrderItem,
                };
              })
            }
          >
            Orders
          </button>
          <div
            className={
              !toggleSidebarItem.toggleOrderItem ? "collapse" : "collapse show"
            }
            id="orders-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/" className="link-dark rounded">
                  New
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Processed
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Shipped
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Returned
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle align-items-center rounded ${
              !toggleSidebarItem.toggleAccountItem ? "collapsed" : ""
            }`}
            aria-expanded={toggleSidebarItem.toggleAccountItem}
            onClick={() =>
              setToggleSidebarItem(() => {
                return {
                  ...toggleSidebarItem,
                  toggleAccountItem: !toggleSidebarItem.toggleAccountItem,
                };
              })
            }
          >
            Account
          </button>
          <div
            className={
              !toggleSidebarItem.toggleAccountItem
                ? "collapse"
                : "collapse show"
            }
            id="account-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <Link to="/" className="link-dark rounded">
                  New...
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/" className="link-dark rounded">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default SidebarBST;
