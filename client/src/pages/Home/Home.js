import React, { Component } from "react";
// import { Redirect, Link } from 'react-router-dom';
import "./Home.css";
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../components/Carousel/Carousel";
import {Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import axios from "axios";
// const keys = require('../../utils/keys');

class Home extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    };

    componentDidMount() {
        // console.log(keys);
        // const emailKeys = keys.nique;
        // console.log(emailKeys);
        // console.log(process.env);
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, email, message} = this.state;

        axios.post("/api/form", {
            name,
            email,
            message
        }).then(response => {

          console.log("not sure why this isn't working?");
            
        }).catch(error => {
            console.log(error);
        })

        this.setState({
            name: "",
            email: "",
            message: ""
        })
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8} lg={8}>
                            <Carousel/>
                        </Col>
                        <Col id={"summary"} xs={12} md={4}>
                            <p> I am a certified Personal Trainer and I can’t wait to begin our journey together! </p> 
                            
                            <p> In 2012 I graduated from Bowling Green State University with a Bachelors of Science degree in Physical Education and an APE Endorsement. In 2016 I received my Masters of Science in Health Education, as well as becoming a certified personal trainer.
                                Shortly after graduation I began my teaching and coaching career both in athletics, and fitness. I have a strong passion for helping others and will continue to do so in a BIG way!</p>

                            <p> Nique Physique Fitness is designed not only to help you reach your maximum potential, but also to provide essential knowledge and enjoyment while doing it! </p>
                        
                        </Col>
                    </Row>

                     <Row className="show-grid">
                        <Col id="emailForm" xs={12} md={8} lg={8}>
                            <Form horizontal>
                                <FormGroup>
                                <ControlLabel>Send Me Email With Any Questions</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={this.state.name}
                                        name="name"
                                        placeholder="Enter Your Name"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="email"
                                        value={this.state.email}
                                        name="email"
                                        placeholder="Enter Your Email"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        componentClass="textarea"
                                        value={this.state.message}
                                        name="message"
                                        placeholder="Enter Message Here"
                                        onChange={this.handleChange}
                                        style={{height:"120px"}}
                                    />
                                </FormGroup>

                                <Button 
                                    type="submit"
                                    onClick={this.handleSubmit}>
                                    Send Email
                                </Button>
                                
                            </Form>
                        </Col>
                        <Col xs={12} md={4} lg={4}>
                            {/* <code>{'<Col xs={6} md={4} />'}</code> */}
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

export default Home