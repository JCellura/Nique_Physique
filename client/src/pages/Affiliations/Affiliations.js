import React, { Component } from "react";
import "./Affiliations.css";
import {Grid, Row, Col, Image, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Hera from "./heraxhero.png";
import HeraBanner from "./herabanner.png";
import NiqueHero from "./Nique_Red_Shirt.jpeg";

class Affiliations extends Component {

    state = {

    }

    componentDidMount() {
        console.log("hello");
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} s={6} md={6} lg={6}>
                            <div>
                                <h3>
                                    Use My Discount Code: <strong> NiquePhysique </strong>
                                </h3>
                            </div>
                            <div>
                                <Col xs={12} s={12} lg={12}>
                                    <a href="https://www.heraxhero.com">
                                        <div className="">
                                            <Image
                                                src={HeraBanner}
                                                width="100%"
                                            />
                                        </div>
                                    </a>
                                    <a href="https://www.heraxhero.com">
                                        <div className="image-container">
                                            <Image
                                                className= "Hera"
                                                src={Hera}
                                            />
                                        </div>
                                    </a>
                                </Col>
                            </div>
                        </Col>

                        <Col xs={12} s={6} md={6} lg={6}>
                            <Col xs={0} s={0} md={0} lg={12}>
                                <a href="https://www.heraxhero.com">
                                    <div className="image-container">
                                        <Image
                                            className= "NiqueHera"
                                            src={NiqueHero}
                                        />
                                    </div>
                                </a>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }





};

export default Affiliations;