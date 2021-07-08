import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  HeartOutlined,
  HeartTwoTone,
  BookOutlined,
  SmileOutlined,
  SmileTwoTone,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = ({ theme }) => {
  const [siderCollapsed, toggleSider] = useState(true);
  return (
    <Sider
      collapsible
      collapsed={siderCollapsed}
      onCollapse={toggleSider}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        top: 50,
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item
          key="sub1"
          icon={<SmileOutlined twoToneColor="#00ff00" />}
          title="About"
        >
          About
        </Menu.Item>
        <Menu.Item
          key="sub2"
          icon={<HeartOutlined twoToneColor="#eb2f96" />}
          title="Research"
        >
          Research
        </Menu.Item>
        <Menu.Item key="3" icon={<BookOutlined />} title="Bookshelf">
          <Link to="/bookshelf">Bookshelf</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
