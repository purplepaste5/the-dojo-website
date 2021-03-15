import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import Jacob from './Pages/Jacob';
import TheDojo from './Pages/TheDojo';
import Ski from './Pages/Ski';

const { Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <HeaderComponent />

        <Content style={{ padding: '0 50px' }}>
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
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}
