import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

import * as S from './styles';

const Header: FC = (props: any) => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <Link to="/">Logo</Link>
      </S.Logo>
      <Input placeholder="Search ..." />
      <Button type="primary" style={{ height: '40px' }}>
        Sign out
      </Button>
    </S.HeaderContainer>
  );
};

export default Header;
