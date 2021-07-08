import React from 'react';
import { Parallax } from 'react-parallax';
import jacobImage from '../../Resources/jacob-side-image.jpg';
import { insideStyles } from '../TheDojo';

const styles = { ...insideStyles, color: 'white' };

const Jacob = () => {
  return (
    <Parallax bgImage={jacobImage}>
      <div style={{ height: 700 }}>
        <div style={styles}>Welcome to Jacob's Dojo</div>
      </div>
    </Parallax>
  );
};

export default Jacob;
