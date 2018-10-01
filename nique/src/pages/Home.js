import React, { Component } from "react";
import "./Home.css"
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../components/Carousel/Carousel";
import {Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";


class Home extends Component {
    state = {

    };

    componentDidMount() {

    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8} lg={8}>
                            <Carousel/>
                        </Col>
                        <Col id={"summary"} xs={12} md={4}>
                            <p> I am a certified Personal Trainer and I can’t wait to begin our journey together! In 2012 I graduated from Bowling Green State University with a Bachelors of Science degree in Physical Education and an APE Endorsement. In 2016 I received my Masters of Science in Health Education, as well as becoming a certified personal trainer.
                                Shortly after graduation I began my teaching and coaching career both in athletics, and fitness. I have a strong passion for helping others and will continue to do so in a BIG way!

                                Nique Physique Fitness is designed not only to help you reach your maximum potential, but also to provide essential knowledge and enjoyment while doing it!
                            </p>
                        </Col>
                    </Row>

                     <Row className="show-grid">
                        <Col xs={12} md={8} lg={8}>
                            <Form horizontal>
                                <FormGroup>
                                <ControlLabel>Send Me Email With Any Questions</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        name="firstName"
                                        placeholder="Enter First Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="email"
                                        value={this.state.value}
                                        name="email"
                                        placeholder="Enter Your Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        value={this.state.text}
                                        name="text"
                                        placeholder="Enter Your Question"
                                    />
                                </FormGroup>

                                <Button type="submit">Send Email</Button>
                                
                            </Form>
                        </Col>
                        <Col xs={12} md={4} lg={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default Home