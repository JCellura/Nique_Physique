console.log('keys.js loaded');

exports.twitter = {
  consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
};

exports.nique = {
  email_address: process.env.REACT_APP_NIQUE_EMAIL_ADDRESS,
  email_password: process.env.REACT_APP_NIQUE_EMAIL_PASSWORD
};



