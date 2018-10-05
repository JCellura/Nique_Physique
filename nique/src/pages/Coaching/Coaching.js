import React, { Component } from "react";
import "./Coaching.css"
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";
import Nique from "./Nique.jpg";
import {Grid, Row, Col, Image, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Trigger from "../../components/Model/Model"

class Home extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={4} lg={4}>
                        <h3>
                            Tired of the same results? Come get into the best shape of your life with a customized fitness program while working with a high end coach #NiquePhysique assisting you throughout your journey! 
                        </h3>
                        <h3>
                            A huge advantage of online training is flexibility and affordability.
                            Each program is tailored to your specific goals and needs. Although we may not be physically in the gym together,  you will start to see the results you want with preparation, consistency and focus!
                            Your Lifestyle package will include:
                        </h3>
                        </Col>
                        <Col id="pictures" xs={12} md={8} lg={8} height="300px">
                            <Row height="100%">
                                <Col xs={6} md={6} lg={6} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            <h2> 6 Week Program </h2>
                                        </div>
                                        <Image src={Nique} height="100%" width="100%"/>
                                    </div>
                                </Col>
                                <Col xs={6} md={6} lg={6} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            <h2> 8 Week Program </h2>
                                        </div>
                                        <figure><Image src={Nique} height="100%" width="100%"/></figure>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col id="pictures" xs={12} md={8} lg={8} height="300px">
                            <Row height="100%">
                                <Col xs={6} md={6} lg={6} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            <h2> 10 Week Program </h2>
                                        </div>
                                        <Image src={Nique} height="100%" width="100%"/>
                                    </div>
                                </Col>
                                <Col xs={6} md={6} lg={6} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 12 Week Program </h2> */}
                                            <Trigger/>
                                        </div>
                                        <figure><Image src={Nique} height="100%" width="100%"/></figure>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
};

export default Home;