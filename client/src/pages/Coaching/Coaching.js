import React, { Component } from "react";
import "./Coaching.css"
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";
import Nique from "./Nique.jpg";
import Nique1 from "./Nique_Blue_Shorts.jpeg";
import NiqueBicep from "./nique_bicep.png";
import {Grid, Row, Col, Image, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Trigger from "../../components/Modal/Modal"

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
                                <Col xs={12} sm={6} md={6} lg={6} style={{marginTop:"20px"}} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 10 Week Program </h2> */}
                                            <Trigger
                                                title="6 Week Program"
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
                                        <figure className="figure1"><Image src={Nique} height="100%" width="100%"/></figure>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} style={{marginTop:"20px"}} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 12 Week Program </h2> */}
                                            <Trigger 
                                                title="8 Week Program"
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
                                        <figure className="figure1"><Image src={Nique1} height= "100%" width="100%"/></figure>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col id="pictures" xs={12} md={8} lg={8} height="300px">
                            <Row height="100%">
                                <Col xs={12} sm={6} md={6} lg={6} style={{marginTop:"20px"}} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 10 Week Program </h2> */}
                                            <Trigger 
                                                title="10 Week Program"
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
                                        <figure className="figure1"><Image src={Nique} height="100%" width="100%"/></figure>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} style={{marginTop:"20px"}} height="100%">
                                    <div className="programs">
                                        <div className="programInfo">
                                            {/* <h2> 12 Week Program </h2> */}
                                            <Trigger 
                                                title="12 Week Program"
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
                                        <figure className="figure1"><Image src={Nique1} height="100%" width="100%"/></figure>
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