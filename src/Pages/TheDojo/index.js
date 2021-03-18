import React from 'react';
import { Parallax } from 'react-parallax';

import theDojo from '../../Resources/the-dojo.jpg';
import theBuddha from '../../Resources/buddha-highres.jpeg';
import space from '../../Resources/space.jpeg';
import theMoon from '../../Resources/the-moon.jpeg';


const images = [theDojo, theBuddha, theMoon];

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
    <div>
      {images.map((i, index) => {
        return (
          <Parallax
            bgImage={i}
            blur={{ min: -15, max: 15 }}
            strength={-200}
          >
            <div style={{ height: 700 }}>
              {index === 0 ? (
                <div style={styles}>Welcome to the Dojo</div>
              ) : (
                ''
              )}
            </div>
          </Parallax>
        );
      })}
    </div>
  );
};

export default TheDojo;
