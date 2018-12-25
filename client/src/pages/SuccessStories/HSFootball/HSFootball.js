import React, { Component } from "react";
import "../SuccessStories.css";
import {Grid, Row, Col, Image, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import NiqueCoaching from "../Photos/Nique_Coaching.jpeg";
import MirrorShot from "../Photos/mirrorshot.jpeg";

class HSFootball extends Component {
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
                                HS Football Star
                            </h1>
                            </Row>
                            <Row> 
                                <p> 18 Year Old Football Standout transitions from 180 to 195 pounds in a summer's worth of consistent training and nutrition! </p>
                            </Row>
                        
                        </Col>
                        <Col xs={0} lg={1}>
                        </Col>
                        <Col xs={12} md={7} lg={7}>
                            <Row>
                                <h1>
                                    After NiquePhysique Training
                                </h1>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    {/* <h1>
                                        Before
                                    </h1> */}
                                    <div className="programs">
                                        <div className="programInfo">
                                        </div>
                                        <figure className="figure"><Image src={NiqueCoaching} height= "100%" width="100%"/></figure>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    {/* <h1>
                                        After 
                                    </h1> */}
                                    <div className="programs">
                                        <div className="programInfo">
                                        </div>
                                        <figure className="figure"><Image src={MirrorShot} height= "100%" width="100%"/></figure>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

export default HSFootball;