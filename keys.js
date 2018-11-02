console.log("IG Keys Are Loaded");

exports.instagram = {
   clientId: process.env.INSTAGRAM_CLIENT_ID,
   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
   accessToken: process.env.INSTAGRAM_ACCESS_TOKEN
}

exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  };