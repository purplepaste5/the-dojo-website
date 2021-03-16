import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useLocation, withRouter } from 'react-router-dom';
import { StratIcon } from '../GuitarIcon';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = () => {
  const [siderCollapsed, toggleSider] = useState(true);
  const location = useLocation();
  return (
    <Sider
      collapsible
      collapsed={siderCollapsed}
      onCollapse={toggleSider}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<StratIcon />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<HomeOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<HomeOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<HomeOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
