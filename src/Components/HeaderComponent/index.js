import React from 'react';
import { Menu, Layout, Switch } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  BookOutlined,
  RadiusSettingOutlined,
  QuestionCircleOutlined,
  FileExclamationFilled,
} from '@ant-design/icons';

import './style.css';

const { Header } = Layout;

const centerStyle = {
  position: 'relative',
  display: 'flex',
};

const fixedHeaderStyle = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
};

const selectedPersonStyle = {
  marginRight: '10px',
  fontFamily: 'B',
};

const rightStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  marginRight: '10px',
};

const HeaderComponent = ({ theme, changePerson, person }) => {
  return (
    <Header style={fixedHeaderStyle} className="header">
      <div className="logo-container">
        <div className="logo">
          {/* <Link to="/">The Dojo</Link> */}
          The Dojo
        </div>
      </div>

      <Menu
        mode="horizontal"
        theme="dark"
        style={centerStyle}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/"> Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="3" icon={<RadiusSettingOutlined />}>
          Research
        </Menu.Item>
        <Menu.Item key="4" icon={<BookOutlined />}>
          <Link to="/bookshelf">Bookshelf</Link>
        </Menu.Item>
      </Menu>
      <div key="5" style={rightStyle}>
        <span style={selectedPersonStyle} className="person-selector">
          {person}{' '}
        </span>
        <Switch
          onChange={changePerson}
          defaultChecked
          className={person === 'Jacob' ? 'ant-switch-jacob' : ''}
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
