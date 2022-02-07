import React from "react";

import { Switch, Route, RouteComponentProps } from "react-router-dom";

import routes from "./config/routes";

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props: RouteComponentProps<any>) => (
              <route.component {...props} {...route.props} />
            )}
          />
        );
      })}
    </Switch>
  );
};

export default App;
