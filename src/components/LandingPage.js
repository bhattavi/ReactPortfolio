import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {

    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <img src = "http://inn.spb.ru/images/000/DSC100034871.png"
                        alt="my image"
                        className="my-img"/>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | React | React Native | Express | MongoDB</p>
                            <div className="social-links">
                                <a href="http://www.google.com" rel="noopener noreferrer" target="_blank"></a>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>

                                <a href="http://www.google.com" rel="noopener noreferrer" target="_blank"></a>
                                <i className="fa fa-github-square" aria-hidden="true"></i>



                            </div>
                        </div>

                    </Cell>

                </Grid>
            </div>
        )
    }

}

export default LandingPage;