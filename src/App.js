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
import BookshelfPage from './Pages/Bookshelf';
const { Content, Sider } = Layout;

const contentStyle = {
  marginTop: 64,
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [person, setPerson] = useState('Ski');

  const changePerson = (value) => {
    setPerson(value ? 'Ski' : 'Jacob');
  };

  return (
    <Router>
      <Switch>
        <Layout className="layout">
          <HeaderComponent
            theme={theme}
            person={person}
            changePerson={changePerson}
          />
          <Layout>
            {/* <SideMenu theme={theme} /> */}
            <Content style={contentStyle}>
              <Route path="/jacob">
                <Jacob />
              </Route>
              <Route path="/" exact={true}>
                <TheDojo />
              </Route>
              <Route path="/ski">
                <Ski />
              </Route>
              <Route path="/bookshelf">
                <BookshelfPage />
              </Route>
              <FooterComponent />
            </Content>
          </Layout>
        </Layout>
      </Switch>{' '}
    </Router>
  );
}
