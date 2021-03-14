import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import Breadcrumbs from './Components/Breadcrumbs';
import FooterComponent from './Components/FooterComponent';

const { Content, Footer } = Layout;

export default function App() {
  return (
    <Layout className="layout">
      <HeaderComponent />

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumbs />
        <div className="site-layout-content">Content</div>
      </Content>
      
      <FooterComponent />
    </Layout>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
