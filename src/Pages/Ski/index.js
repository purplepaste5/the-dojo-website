import React from 'react';
import { Parallax, Background } from 'react-parallax';
import skiImage from '../../Resources/andrew-side-image-2.jpg';
import { insideStyles } from '../TheDojo';

const styles = { ...insideStyles, color: 'white' };

const Ski = () => {
  return (
    <Parallax bgImage={skiImage}>
      <div style={{ height: 700 }}>
        <div style={styles}>Welcome to Ski's Dojo</div>
      </div>
    </Parallax>
  );
};

export default Ski;
