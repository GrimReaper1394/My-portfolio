import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import './grids.css'


export class Resume extends Component {
    render() {
        return (
            <div className='Maindiv'>
                <Grid>
                    <Cell className='resume-left-col' col={4}>
                        <div style={{textAlign: 'center'}}>
                           <img src='https://ww.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                           alt='avatar'
                           />
                        </div> 
                    </Cell>

                    <Cell className='resume-right-col' col={8}>Right side </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
