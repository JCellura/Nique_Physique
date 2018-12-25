import React, { Component } from "react";
import "./Training.css";
import {Grid, Row, Col, Image, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Trigger from "../../components/Modal/Modal";
import Nique from "./Photos/Nique_Coaching.jpeg";
import Nique1 from "./Photos/nique_dumbell.JPG";

class Training extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={0} md={1} lg={1} height="300px">
                        </Col>
                        <Col id="pictures" xs={12} md={10} lg={10} height="300px">
                            <Row id="trainingRow" height="100%">
                                <Col xs={12} sm={6} md={6} lg={6} style={{marginTop:"20px"}} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 10 Week Program </h2> */}
                                            <Trigger 
                                                title="Youth Training (Ages 13-17)"
                                                text="This Complete Program Includes:"
                                                textBody={
                                                        <ul>
                                                            <li>Nutrition program designed for your current weight and body composition.</li>
                                                            <li>HIIT/LISS Cardiovascular Endurance Plan</li>
                                                            <li>Full Detailed Workout Program</li>
                                                            <li>Supplementation advice</li>
                                                            <li>Plan updates when necessary</li>
                                                            <li>Check-Ins twice a month</li>
                                                            <li>10% Discounts on HeraXHero Fashion. Discount Code “NiquePhysique”</li>
                                                        </ul>}
                                            />
                                        </div>
                                        <figure id="figure" className="figure"><Image src={Nique} height="100%" width="100%"/></figure>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} style={{marginTop:"20px"}} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 12 Week Program </h2> */}
                                            <Trigger 
                                                title="Adult Training (Ages 18+)"
                                                text="This Complete Program Includes:"
                                                textBody={
                                                        <ul>
                                                            <li>Nutrition program designed for your current weight and body composition.</li>
                                                            <li>HIIT/LISS Cardiovascular Endurance Plan</li>
                                                            <li>Full Detailed Workout Program</li>
                                                            <li>Supplementation advice</li>
                                                            <li>Plan updates when necessary</li>
                                                            <li>Check-Ins twice a month</li>
                                                            <li>10% Discounts on HeraXHero Fashion. Discount Code “NiquePhysique”</li>
                                                        </ul>}
                                            />
                                        </div>
                                        <figure id="figure" className="figure"><Image src={Nique1} height= "100%" width="100%"/></figure>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={0} md={1} lg={1} height="300px">
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

export default Training;