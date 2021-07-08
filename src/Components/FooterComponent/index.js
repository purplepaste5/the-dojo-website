import React from 'react';
import { Layout } from 'antd';
import './style.css';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{ textAlign: 'center' }}
      className="footer"
      hasSider={true}
    >
      The World is Your Dojo
    </Footer>
  );
};

export default FooterComponent;
