import React, { Component } from "react";
import "./SocialMedia.css";
import {Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Twitter from "twitter";
// import request from "request";
// import fs from "fs";
// const dotenv = require("dotenv");
// import dotenv from "dotenv/config";

require("dotenv").config();

const keys = require('../../utils/keys');

 
// if (result.error) {
//   throw result.error
// }
 
// console.log(result.parsed);

const twitterKeys = keys.twitter;
console.log(twitterKeys);

console.log(process.env);


class SocialMedia extends Component {
    state = {

    };

    componentDidMount() {
        // this.retriveTweets();
    }

    // retriveTweets = () => {

    //     const client = new Twitter(twitterKeys);

    //     let params = {screen_name: "fullstack_coder", count:20};

    //     client.get('statuses/user_timeline', params, (error,tweets,response) => {
    //         if (error) {
    //             console.log(error);
    //             return
    //         } else {
    //             var outputStr = '------------------------\n' +
	// 						'User Tweets:\n' + 
    //                         '------------------------\n\n';
                
    //             for (let i = 0; i < tweets.length; i++) {
    //                 outputStr += 'Created on: ' + tweets[i].created_at + '\n' + 
    //                                 'Tweet content: ' + tweets[i].text + '\n' +
    //                                 '------------------------\n';
    //             }
    //         }
    //         console.log(outputStr);
    //     })

    // }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Twitter</h3>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Instagram</h3>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Facebook</h3>
                    </Col>            
                </Row>
            </Grid>
        )
    };

};

export default SocialMedia;