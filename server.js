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

require("dotenv").config();
const instaKeys = require("./keys")
const igKeys = instaKeys.instagram;
console.log(igKeys);
let twitterKeys = instaKeys.twitter;
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


console.log(process.env);
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

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve("client/build", 'index.html'));
    });

    twitterKeys = {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
}

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
            // port: 465,
            // secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.NIQUE_EMAIL_ADDRESS, // generated ethereal user
                pass: process.env.NIQUE_EMAIL_PASSWORD // generated ethereal password
            }
        });

        let mailOptions = {
            from: '"Nique Physique" <Nique@gmail.com>',
            // from: req.body.email,
            to: "cellura.joseph@gmail.com",
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

    let params = {screen_name: "fullstack_coder", count:10};

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
        res.json(tweets);
    })

})

app.get("/api/socialmedia/instagram", (req,res) => {

    instagram.get('users/self/media/recent', {count:4}, (err, data) => {
        if (err) {
          // an error occured
          console.log(err);
        } else {
          console.log(data);
          res.json(data);
        }
    });

})


app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
});