import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import * as S from './styles';

const AdminLayout = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps: RouteComponentProps<any>) => (
        <S.LayoutContainer>
          <Header />
          <S.MainContainer>
            <Sidebar />
            <Component {...routeProps} />
          </S.MainContainer>
        </S.LayoutContainer>
      )}
    />
  );
};

export default AdminLayout;
