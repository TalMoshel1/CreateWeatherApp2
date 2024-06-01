import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TiWeatherPartlySunny } from "react-icons/ti";


export function Animation() {
  const elementRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        if (rect.right >= viewportWidth) {
          setPosition(0);
          elementRef.current.style.left = '0';
        } else {
          setPosition(prevPosition => prevPosition + 1);
          elementRef.current.style.left = `${position}px`;
        }
      }
    }, 16);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <AnimationContainer ref={elementRef}>
      <TiWeatherPartlySunny style={{ width: '3rem', height: '3rem', zIndex: -1 }} />
    </AnimationContainer>
  );
}

const AnimationContainer = styled.div`
  position: absolute;
  white-space: nowrap;
  z-index: 1;
`;
