import React from 'react';
import { Parallax } from 'react-parallax';

import theDojo from '../../Resources/the-dojo.jpg';
import theBuddha from '../../Resources/buddha-highres.jpeg';
import space from '../../Resources/space.jpeg';
import theMoon from '../../Resources/the-moon.jpeg';
import SlantendTextContainer from '../../Components/SlantedTextContainer';
import DojoExplanation from '../../Components/DojoExplanation';

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
          <div>
            <Parallax
              bgImage={i}
              blur={{ min: -15, max: 15 }}
              strength={-200}
              key={index}
              className={
                index === 0
                  ? 'slanted-image-first'
                  : index === images.length - 1
                  ? 'slanted-image-last'
                  : 'slanted-image'
              }
            >
              <div style={{ height: 700 }}></div>
            </Parallax>

            {index < images.length - 1 ? (
              <SlantendTextContainer>
                {index === 0 ? (
                  <DojoExplanation
                  title="The Dojo"
                  description="A Dojo, by definition, is a place of the Way. 
                  The Way being a concept developed by Taoists and Buddhists alike. 
                  A Dojo is a place of love, light, and insight. A Dojo is also a place of despair, darkness, and change. 
                  The World is a Dojo, accepting, renewing, or revoking membership through a network of possibility; and from that network emerges awareness.
                  We are the eyes of the world. The Dojo is ours to foster and ours to destroy."
                >
                  {' '}
                </DojoExplanation>

                ) : ''}
                
              </SlantendTextContainer>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TheDojo;
