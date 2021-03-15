import React from 'react';
import { Parallax, Background } from 'react-parallax';
import skiImage from '../../Resources/andrew-image-wide.jpg';

const Ski = () => {
  return (
    <Parallax bgImage={skiImage} strength={500}>
      <div style={{ height: 1000 }}>
        <div>HTML inside the parallax</div>
      </div>
    </Parallax>
  );
};

export default Ski;
