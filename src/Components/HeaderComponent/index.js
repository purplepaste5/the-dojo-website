import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ textAlign: 'center' }}
      >
        <Menu.Item key="1">
          {' '}
          <Link to="/jacob">Jacob</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">The Dojo</Link>
        </Menu.Item>
        <Menu.Item key="3">
          {' '}
          <Link to="/ski">Ski</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
