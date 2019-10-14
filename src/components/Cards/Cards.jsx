import React, { Component } from 'react';

import Card from './CardUI'
import img1 from './images/nathan-dumlao-y21qF5V_k6Q-unsplash.jpg'
import img2 from './images/codes-coding-programming-270366.jpg'
import img3 from './images/actionvance-n-2_KHgeAy0-unsplash.jpg'




const Leadership = ['The drive is to lead by example and to lead through excellence. Trained by profesionals to always have the interests of people at heart']
const Coding = 'A host of skills both developed and still in development'
const Contact = 'The drive is to lead by example and to lead through excellence'


class Cards extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title='Leadership' text={Leadership}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='Coding' text={Coding}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='Contact Me' text={Coding} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Cards ;