import React from 'react';
import { Parallax } from 'react-parallax';

import theDojo from '../../Resources/the-dojo.jpg';

export const insideStyles = {
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  fontSize: '3rem',
};

const styles = { ...insideStyles, color: 'black' };

const TheDojo = () => {
  return (
    <Parallax bgImage={theDojo}>
      <div style={{ height: 700 }}>
        <div style={styles}>Welcome to the Dojo</div>
      </div>
    </Parallax>
  );
};

export default TheDojo;
