console.log('keys.js loaded');

exports.twitter = {
  consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
};