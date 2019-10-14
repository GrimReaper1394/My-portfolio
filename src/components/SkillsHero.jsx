import React, { Component } from 'react';
import styled from 'styled-components';
import Keyboard from '../images/mateo-vrbnjak-nCU4yq5xDEQ-unsplash.jpg'
import Cards from './Cards/Cards'
// hero text for skills page

// div for skills
const SkillDiv = styled.div`
background-size: contain;
background-image: url(${Keyboard});
background-repeat: no-repeat;
width: 1250px;
height: 100px;
border: #fff;
border: 2px solid;
border-radius: 25px;
margin: 10px;
`;

const BreakDiv = styled.div`
background-size: cover;
background: #050833;
background-repeat: no-repeat;
width: auto;
height: 300px;
border: #fff;
border: 2px solid;
margin: 10px;
`;

export class SkillsHero extends Component {
    render() {
        return (
            <div className="fluid">
                <SkillDiv>
                    <div>
                        <h1 className='SkillsHero'>Skills</h1>
                    </div>
                </SkillDiv>
                <Cards/>
                <BreakDiv/>
            </div>
        );
    }
}

export default SkillsHero;
