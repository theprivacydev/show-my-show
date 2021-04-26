require('dotenv/config');
const Router = require('express').Router();
const User = require('../models/User');

Router.get('/:username', async (req, res) => {
  try {
    console.log('we are getting to all users');
    const users = await User.find({
    username: req.params.username});
    res.json(user);
  } catch (err) {
    res.status(501);
    console.log('error in the users get route: ', err);
    res.send('unexpected server error when getting users!');
  }
});

Router.get('/:username/shows', async (req, res) => {
  try {
    console.log('we are getting to shows get route');
    const savedUser = await User.findById(req.params.id);
    res.json(savedUser.savedShows);
  } catch (err) {
    res.status(501);
    console.log('error in the shows get route: ', err);
    res.send('unexpected server error when getting shows!');
  }
});

Router.post('/:id/show', function (req, res) {
  console.log('our request is: ', req.body);
  const savedShow = req.body;
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { savedShows: savedShow } },
    { new: true }
  )
    .then(function (dbUser) {
      console.log('our user with new show is:', dbUser);
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

Router.post('/:username', async (req, res) => {
  try {
    console.log('we got a user with: ', req.body);
    const user = await User.create({username: req.params.username});
    console.log("our post request for user is: ", user);
    res.status(201);
  } catch (err) {
    res.status(501);
    console.log('error in the users post route: ', err);
    res.send('unexpected server error when posting a user!');
  }
});

module.exports = Router;