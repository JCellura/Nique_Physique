import React, { Component } from "react";
import "./SocialMedia.css";
import {Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import Twitter from "twitter";
import axios from "axios";

class SocialMedia extends Component {
    state = {
        tweets: [],
        IGPosts: [],
    };

    componentDidMount() {

        this.getTweets();
        this.getIgPosts();
    }

    getTweets = (event) => {

        axios.get("/api/socialmedia", {}

        ).then(response => {

            console.log(response);
            this.setState({tweets:response.data})
            console.log(this.state.tweets)

        })
    };

    getIgPosts = (event) => {

        axios.get("/api/socialmedia/instagram", {}

        ).then(response => {
            console.log(response);
            this.setState({IGPosts:response.data.data})
            console.log(this.state.IGPosts);
        })
    };

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Twitter</h3>
                        <div>
                            {/* {this.state.tweets.map(tweet =>  {
                                return <li key={tweet.id}> {tweet.text} </li>
                            })} */}
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Instagram</h3>
                        <div>
                            {/* {this.state.IGPosts.map(post => {
                                return <img 
                                        key={post.id} 
                                        src={post.images.standard_resolution.url}
                                        width="150"
                                        height="150"
                                        alt=""
                                        />
                            })} */}
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