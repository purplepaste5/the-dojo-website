import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import Jacob from './Pages/Jacob';
import TheDojo from './Pages/TheDojo';
import Ski from './Pages/Ski';
import SideMenu from './Components/SideMenu';
const { Content, Sider } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <HeaderComponent />
        <Layout>
          <SideMenu />
          <Content>
            <Switch>
              <Route path="/jacob">
                <Jacob />
              </Route>
              <Route path="/" exact={true}>
                <TheDojo />
              </Route>
              <Route path="/ski">
                <Ski />
              </Route>
            </Switch>{' '}
            <FooterComponent />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
