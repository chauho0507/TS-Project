import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import HeaderBST from "../HeaderBST/HeaderBST";
import SidebarBST from "../SidebarBST/SidebarBST";

const AdminLayout = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps: RouteComponentProps<any>) => (
        <>
          <HeaderBST />
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <SidebarBST />
              </div>
              <div className="col">
                <Component {...routeProps} />
              </div>
            </div>
          </div>
        </>
      )}
    />
  );
};

export default AdminLayout;
