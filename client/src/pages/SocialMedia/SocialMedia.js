import React, { Component } from "react";
import "./SocialMedia.css";
import {Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel, Form} from "react-bootstrap";
import axios from "axios";
// import FacebookLogin from 'react-facebook-login';
// import { FacebookProvider, Page, LoginButton } from 'react-facebook';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

class SocialMedia extends Component {
    state = {
        tweets: [],
        IGPosts: [],
    };

    componentDidMount() {

        this.getTweets();
        this.getIgPosts();
        // this.sdkFunction();
        // this.getFacebook();
        // window.FB.AppEvents.logPageView();
        // window.FB.XFBML.parse();
    }

    getTweets = (event) => {

        axios.get("/api/socialmedia", {}

        ).then(response => {

            console.log(response);
            this.setState({tweets:response.data})
            console.log(this.state.tweets)
            console.log(this.state.tweets[0].entities.media[0].display_url);

            this.state.tweets.forEach(tweet => {
                console.log("no");
            })

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

    getFacebook = () => {
        let accessToken = "EAAevZBiYpBPIBAEyfsXqnipz6q0fxRJQY9H5u3BiRODiAMCvcEaAaFORikQhrfIziU4FERwr0ssM6KXBcnsi0PIrmOiHbzpB9iolP77feUqEyDe7mt2ltxARdws03Mxs5z8oTJ65p9nzIBxpO1tvIefDe9ZCwa2dtVxUekRv4kRDHDANf7ZADAEKHrLFGe3u8dwCF2uUPs7y8MX96xH6R5ro448Su8ZD";
        axios.get("/api/socialmedia/facebook", {}).then(response => {
            console.log(response);
        });
        axios.get("https://graph.facebook.com/v2.11/" + "2153460684666961" 
				  + "?fields=picture.height(961)&access_token=" + accessToken)
		.then(res => {
		   console.log(res)
		   this.setState({profilePicture: res.data.picture.data.url});
		   console.log("Profile Picture: ", this.state.profilePicture);
		   this.setState({errorMessage: ""});
		})
    }

    sdkFunction = () => {
       
        // window.fbAsyncInit = function() {
        //     window.FB.init({
        //     appId            : '2163813753881842',
        //     autoLogAppEvents : true,
        //     xfbml            : true,
        //     version          : 'v3.2'
        //     });
        // };

        // (function(d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) return;
        //     js = d.createElement(s); js.id = id;
        //     js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=2163813753881842&autoLogAppEvents=1';
        //     fjs.parentNode.insertBefore(js, fjs);
        //   }(document, 'script', 'facebook-jssdk'));

    };

    // responseFacebook = (response) => {
    //     console.log(response)
    // }
    

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Twitter</h3>
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="coachsand23"
                        options={{height: 400}}
                        />
                        {/* <div>
                            {this.state.tweets.map((tweet, i) =>  {
                                return ( tweet.entities.media ? (
                                    <div className="igImage">
                                            <img 
                                                key={i}
                                                src={tweet.entities.media[0].media_url_https}  // expanded display media media_url_https
                                                width="150"
                                                height="150"
                                                alt="help"
                                            />
                                    </div>
                                ) : (console.log("no")) ) 
                            })}
                        </div> */}
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Instagram</h3>
                        <div>
                            {this.state.IGPosts.map((post, i) => {
                                return <a href={post.link}><div className="igImage"><img 
                                        key={i} 
                                        src={post.images.standard_resolution.url}
                                        width="150"
                                        height="150"
                                        alt=""
                                        /></div></a>
                            })}
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h3>Facebook</h3>
                        {/* <FacebookLogin
                        appId="2163813753881842"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook} 
                        />, */}
                        {/* <div className="fb-page" 
                            data-href="https://www.facebook.com/" 
                            data-tabs="timeline" 
                            data-width="200" 
                            data-height="50" 
                            data-small-header="false" 
                            data-adapt-container-width="true" 
                            data-hide-cover="false" 
                            data-show-facepile="true">
                        </div> */}
                        {/* <FacebookProvider appId="2163813753881842">
                            <Page href="https://www.facebook.com/joe.cellura.1" tabs="timeline" />
                        </FacebookProvider>  */}
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BrDkRXkASDt/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                            style={{marginLeft:"20px"}}
                        />
                    </Col>            
                </Row>
            </Grid>
        )
    };

};

export default SocialMedia;