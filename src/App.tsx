import React, { FC } from 'react';

import { Switch } from 'react-router-dom';
import AdminLayout from './layouts/adminLayout/adminLayout';

import routes from './config/routes';

const App: FC = props => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <AdminLayout
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default App;
