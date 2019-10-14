import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components';

// importing router
import { Link } from "react-router-dom";

const linkPages = styled.div`
background-size: 100%;
width: 1250px;
height: 200px;
`;


const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><Link to='/'>Home</Link></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><Link to='/About'>About Me</Link></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}><Link to='/Languages'>Languages</Link></animated.div>,
]

function Pages() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <linkPages>
        <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
        })}
        </div>
    </linkPages>
  )
}

export default Pages;