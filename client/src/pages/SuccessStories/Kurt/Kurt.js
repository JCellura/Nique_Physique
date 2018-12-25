import React, { Component } from "react";
import "../SuccessStories.css";
import {Grid, Row, Col, Image, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import KurtBefore from "../Photos/kurt_before.jpeg";
import KurtAfter from "../Photos/kurt_after.jpeg";
import KurtBeforeAfter from "../Photos/kurt_before_after.jpeg";
import KurtMedal from "../Photos/kurt_medal.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Kurt extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={4} lg={4}>
                            <Row>
                            <h1>
                                Kurt (44 Years Old)
                            </h1>
                            </Row>
                            <Row> 
                                <p> Kurt contacted me at the age of 44 wanting to compete in a bodybuilding show! With 24 weeks of consistent training and nutrition Kurt lost 38 lbs and competed in his first ever Men's Physique Master's show! Kurt is now 47 and continues to train and eat health year round! </p>
                            </Row>
                        
                        </Col>
                        <Col xs={0} lg={1}>
                        </Col>
                        <Col xs={12} md={7} lg={7}>
                            {/* <Row>
                                <h1>
                                    After NiquePhysique Training
                                </h1>
                            </Row> */}
                            <Row>
                                <Col lg={6}>
                                    <h1>
                                        Before
                                    </h1>
                                    <div className="programs">
                                        <div className="programInfo">
                                        </div>
                                        <figure className="figure"><Image src={KurtBefore} height= "100%" width="100%"/></figure>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <h1>
                                        After 
                                    </h1>
                                    {/* <div className="programs">
                                        <div className="programInfo">
                                        </div>
                                        <figure className="figure"><Image src={KurtAfter} height= "100%" width="100%"/></figure>
                                    </div> */}
                                    <Carousel infiniteLoop={true} interval={3000} showArrows={true} autoPlay={true} showThumbs={true} emulateTouch={true} showStatus={false}>
                                        <div>
                                            <img src={KurtAfter} alt="" />
                                            <p className="legend"></p>
                                        </div>
                                        <div>
                                            <img src={KurtBeforeAfter} alt="" />
                                            <p className="legend"></p>
                                        </div>
                                        <div>
                                            <img src={KurtMedal} alt="" />
                                            <p className="legend"></p>
                                        </div>
                                    </Carousel>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

export default Kurt;