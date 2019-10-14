import React, { useRef, useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import img from '../images/laptop-dark.jpg';

const Landing = styled.div`
background-image: url(${img});
background-size: cover;
display: flex;
height: 98vh;
width: 100vw;
`;

function Transition() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Hi I am Tich']), 2000));
    ref.current.push(setTimeout(() => set(['I am a','Developer']), 5000));
    ref.current.push(setTimeout(() => set(['I am an','Innovator']), 8000));
    ref.current.push(setTimeout(() => set(['I am a','Visionary']), 11000));
    ref.current.push(setTimeout(() => set(['I am a','Gamer']), 14000));
    ref.current.push(setTimeout(() => set(['I am Tich']), 17000));
  }, [])

  useEffect(() => void reset(), [])

  return (
    <Landing>
      <div className='useless'>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </Landing>
  )
}

export default Transition