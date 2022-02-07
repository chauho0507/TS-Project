import React, { FC } from 'react';

import { Menu, Divider } from 'antd';
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import * as S from './styles';

const { SubMenu } = Menu;

const Sidebar: FC = () => {
  return (
    <S.SidebarContainer>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<HomeOutlined />} title="Home">
          <Menu.Item key="1">Overview</Menu.Item>
          <Menu.Item key="2">Updates</Menu.Item>
          <Menu.Item key="3">Reports</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Dashboard">
          <Menu.Item key="5">Overview</Menu.Item>
          <Menu.Item key="6">Weekly</Menu.Item>
          <Menu.Item key="7">Monthly</Menu.Item>
          <Menu.Item key="8">Annually</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Orders">
          <Menu.Item key="9">New</Menu.Item>
          <Menu.Item key="10">Processed</Menu.Item>
          <Menu.Item key="11">Shipped</Menu.Item>
          <Menu.Item key="12">Returned</Menu.Item>
        </SubMenu>
        <Divider />
        <Menu.Item key="13">Test</Menu.Item>
      </Menu>
    </S.SidebarContainer>
  );
};

export default Sidebar;
