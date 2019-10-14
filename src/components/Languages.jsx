import React, { useState } from 'react';
import { useSpring, useSprings, animated, interpolate } from 'react-spring'
import styled from 'styled-components';
import Background from '../images/brush.png'
import Skills from './SkillsHero'
import History from '../components/History/History'
import About from './About'


// image imports
import Nod from '../images/Languages/nodejs-144.png'
import JS from '../images/Languages/javascript-100.png'
import html5 from '../images/Languages/html-5-100.png'
import Heroku from '../images/Languages/heroku-100.png'
import Git from '../images/Languages/git-100.png'
import Python from '../images/Languages/python-100.png'


// div for languages
const LangDiv = styled.div`
background-image: url(${Background});
background-size: cover;
margin: 4px;
display: flex;
height: 98vh;
width: 100vw;
`;

// div acts as breaker
const BreakDiv = styled.div`
background-size: cover;
background: #00bec5;
background-repeat: no-repeat;
width: auto;
height: 150px;
border: #fff;
border: 2px solid;
border-radius: 25px;
margin: 10px;
`;

// carousel div
const CarouDiv = styled.div`
background-size: cover;
display: flex;
`;

// react-spring functional component with animation rulesets. It enables transformations and achieves stacking effect
function Stack({ image, background }) {
  // useState starts of closed
  const [open, setOpen] = useState(false)
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
  const cards = useSprings(4, [0, 1, 2, 3].map(i => ({ opacity: 0.5 + i / 9, z: open ? (i / 9) * 80 : 0 })))
  return (
    // once spring is used useState changes to true. this is triggers by the onMouseEnter event, and the on mouseLeave event disables it
    <div class="containerLang" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            background,
            // transformations like css, but smoother ant realistic with better fps
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            )
          }}>
          {index === 3 && <animated.img style={{ transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={image}/>}
        </animated.div>
      ))}
    </div>
  )
}

export default function Languages() {
  return (
    <div className='someflexdiv'>
      <Skills/>
      <LangDiv>

        <div className='Languages'>
          <h1>Languages</h1>
          <p>The following are technologies I have exposure to</p>
        </div>

        {/* this renders animated componets using react-spring */}
        <div className='everything'>
          <div className="main" id="Languages">
            <Stack image={Nod} alt="image missing" background="MediumSeaGreen" />
            <Stack image={html5} alt="image missing" background="#f7f295" />
            <Stack image={JS} alt="image missing" background="Orange" />
            <Stack image={Python} alt="image missing" background="SlateBlue" />
            <Stack image={Git} alt="image missing" background="#f7f295" />
            <Stack image={Heroku} alt="image missing" background="#f7f295" />
          </div>
        </div>

      </LangDiv>

      <CarouDiv>
        <History/>
      </CarouDiv>
     
    </div>
  )
}


