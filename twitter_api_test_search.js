var Twitter = require('twitter');
require('dotenv/config');

const apiKey = process.env.REACT_APP_TWITTER_API_KEY
const apiSecretKey = process.env.REACT_APP_TWITTER_SECRET_API_KEY
const accessToken = process.env.REACT_APP_TWITTER_ACCESS_TOKEN
const accessSecretToken = process.env.REACT_APP_TWITTER_SECRET_ACCESS_TOKEN
 
const client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessSecretToken
});
 
// var params = {screen_name: 'cloudycodes'};
client.get('search/tweets', {q: '#showmyshow'}, function(error, tweets, response) {
    tweets.statuses.forEach(function(tweet) {
        console.log("tweet: " + tweet.text)
    });
 });