const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
const Twitter = require("twitter");
const Instagram = require("node-instagram").default;
var FB = require('fb');
 
require("dotenv").config();
const instaKeys = require("./keys")
const igKeys = instaKeys.instagram;
console.log(igKeys);
const twitterKeys = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}
console.log(twitterKeys);
const instagram = new Instagram({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
  });

const aws = require('aws-sdk');
let s3 = new aws.S3({
  niqueEmail: process.env.NIQUE_EMAIL_ADDRESS,
  niquePassword: process.env.NIQUE_EMAIL_PASSWORD
});


// console.log(process.env);
console.log(s3.config.niqueEmail);
console.log(s3.config.niquePassword);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
   //and remove cacheing so we get the most recent appointments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
    res.send({ message: 'API Initialized!'});
    console.log('Api initialized');
});
//Use our router configuration when we call /api
app.use('/api', router);

app.post("/api/form", (req,res) => {
    console.log(req.body);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>

            `
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.NIQUE_EMAIL_ADDRESS, // generated ethereal user
                pass: process.env.NIQUE_EMAIL_PASSWORD // generated ethereal password
            }
        });

        let mailOptions = {
            from: '"Nique Physique" <Nique@gmail.com>',
            // from: req.body.email,
            to: "sandersbg23@gmail.com",
            replyTo: req.body.email,
            subject: "New Message From Website",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log(`Message Sent: %s`, info.messageId);
            console.log(`Message URL: %s`, nodemailer.getTestMessageUrl(info));
        })

    })

});


app.get("/api/socialmedia", (req,res) => {
    
    const client = new Twitter(twitterKeys);

    let params = {screen_name: "coachsand23", count:10};

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
        // console.log(outputStr);
        res.send(tweets);
        // console.log(tweets);
    })

});

// var accessToken = 0;

// FB.api('oauth/access_token', {
//     client_id: '2163813753881842',
//     client_secret: 'ec7c0c4bf756b3afa2e8f3d06bbea47f',
//     grant_type: 'client_credentials',
//     redirect_uri: 'http://localhost:3000/api/socialmedia/facebook'
// }, function (res) {
//     if(!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }

//     accessToken = res.access_token;
//     console.log(res);
//     FB.setAccessToken(accessToken);
//     var accessToken = FB.getAccessToken();
//     console.log(accessToken);
// })

FB.setAccessToken("EAAevZBiYpBPIBAEyfsXqnipz6q0fxRJQY9H5u3BiRODiAMCvcEaAaFORikQhrfIziU4FERwr0ssM6KXBcnsi0PIrmOiHbzpB9iolP77feUqEyDe7mt2ltxARdws03Mxs5z8oTJ65p9nzIBxpO1tvIefDe9ZCwa2dtVxUekRv4kRDHDANf7ZADAEKHrLFGe3u8dwCF2uUPs7y8MX96xH6R5ro448Su8ZD");

// FB.api('oauth/access_token', {
//     client_id: '2163813753881842',
//     client_secret: 'ec7c0c4bf756b3afa2e8f3d06bbea47f',
//     grant_type: 'fb_exchange_token',
//     fb_exchange_token: 'existing_access_token'
// }, function (res) {
//     if(!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }
 
//     accessToken = res.access_token;
//     var expires = res.expires ? res.expires : 0;
//     console.log(accessToken);

// });

app.get("/api/socialmedia/facebook", (req,res) => {

    console.log(FB);

    // FB.api('oauth/access_token', {
    //     client_id: '2163813753881842',
    //     client_secret: 'ec7c0c4bf756b3afa2e8f3d06bbea47f',
    //     grant_type: 'client_credentials'
    // }, function (res) {
    //     if(!res || res.error) {
    //         console.log(!res ? 'error occurred' : res.error);
    //         return;
    //     }
    
    //     accessToken = res.access_token;
    //     console.log(accessToken);
    //     FB.options({accessToken: accessToken});
    // })
        
    // FB.api('/me', { fields: 'id,name,picture.type(large)' }, function (res) {
    //     if(!res || res.error) {
    //       console.log(!res ? 'error occurred' : res.error);
    //       return;
    //     }
    //     console.log(res.id);
    //     console.log(res.name);
    //   });

    // FB.setAccessToken("EAAc66hs0QzIBAPULkekVAuy7M9Wlpb4oOZAFtSJzOZAtcPlDXhZCvu3WGSJbCOrwKbP94VlDfpa6V6HieGDFUsKmyuxSxZBU2H70dDi58IMjZC72XGSKj2hRyL4K3O6FwFXcdsmVZAkCUeWUI2EZAipCwdlw3afoCz0qQhF5a3i9COJZBV8pCc0VTmWxs2eqBxcLcj95ig6WvQZDZD");
    
    // var body = 'My first post using facebook-node-sdk';
    //     FB.api('me/feed', 'post', { message: body }, function (res) {
    //     if(!res || res.error) {
    //         console.log(!res ? 'error occurred' : res.error);
    //         return;
    //     }
    //     console.log('Post Id: ' + res.id);
    //     });

    // FB.api('/me', { fields: ['id', 'name', 'picture'] }, function (data) {
    //     if(!res || res.error) {
    //       console.log(!res ? 'error occurred' : res.error);
    //       return;
    //     }
    //     console.log(data);
  
    //     res.send(data);
    //   });
    

})

app.get("/api/socialmedia/instagram", (req,res) => {

    instagram.get('users/self/media/recent', {count:4}, (err, data) => {
        if (err) {
          // an error occured
          console.log(err);
        } else {
        //   console.log(data);
          res.send(data);
        }
    });

})

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve("client/build", 'index.html'));
    });

}


app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
});

