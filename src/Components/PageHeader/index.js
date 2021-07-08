import React from 'react';
import { Column, Row } from 'simple-flexbox';
import './style.css';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <h1 className="page-header-text">{title}</h1>
    </div>
  );
};

export default PageHeader;
