import React, { Component } from 'react';
 import styled from 'styled-components';
 import img from '../images/paintbrush.png';
 import Me from '../images/me.jpg'
 import History from './History/History'
 
 
 const Content = styled.div`
    background-image: url(${img});
    background-size: cover;
    display: flex;
    height: 98vh;
    width: 100vw;
 `;

 
 

class About extends Component {
    render() {
        return (
            <History></History>
        );
    }
}

export default About;

 
 