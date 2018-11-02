import React, { Component } from "react";
import "./SocialMedia.css";
import {Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Twitter from "twitter";
import axios from "axios";

require("dotenv").config();

const keys = require('../../utils/keys');

const twitterKeys = keys.twitter;
console.log(twitterKeys);

console.log(process.env);


class SocialMedia extends Component {
    state = {
        tweets: [],
        IGPosts: [],
    };

    componentDidMount() {
        // this.retrieveTweets();
        this.getTweets();
        this.getIgPosts();
    }

    getTweets = (event) => {

        axios.get("/api/socialmedia", {}

        ).then(response => {

            // console.log(response);
            this.setState({tweets:response.data})
            console.log(this.state.tweets)

        })
    };

    getIgPosts = (event) => {

        axios.get("/api/socialmedia/instagram", {}

        ).then(response => {
            // console.log(response);
            this.setState({IGPosts:response.data.data})
            console.log(this.state.IGPosts);
        })
    }

    retrieveTweets = () => {

        const client = new Twitter(twitterKeys);

        let params = {screen_name: "fullstack_coder", count:20};

        client.get('statuses/user_timeline', params, (error,tweets,response) => {
            if (error) {
                console.log(error);
                return
            } else {
                var outputStr = '------------------------\n' +
							'User Tweets:\n' + 
                            '------------------------\n\n';
                
                for (let i = 0; i < tweets.length; i++) {
                    outputStr += 'Created on: ' + tweets[i].created_at + '\n' + 
                                    'Tweet content: ' + tweets[i].text + '\n' +
                                    '------------------------\n';
                }
            }
            console.log(outputStr);
        })

    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Twitter</h3>
                        <div>
                            {this.state.tweets.map(tweet =>  {
                                return <li key={tweet.id}> {tweet.text} </li>
                            })}
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Instagram</h3>
                        <div>
                            {this.state.IGPosts.map(post => {
                                return <img 
                                        key={post.id} 
                                        src={post.images.standard_resolution.url}
                                        width="150"
                                        height="150"
                                        />
                            })}
                        </div>
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