const express = require('express');
const app = express();
const profileRoutes = express.Router();

// Require Product model in our routes module
let Profile = require('../models/Profile');

profileRoutes.route('/add').post(function(req, res) {
    let profile = new Profile(req.body);
    profile.save()
    .then(profile => {
        res.status(200).json({'Profile': 'Has been saved'});
    })
    .catch(err => {
        res.status(400).send('Unable to save profile');
    });
});

// Defined get data(index or listing) route
profileRoutes.route('/').get(function (req, res) {
    Profile.find(function (err, profiles){
      if(err){
        console.log(err);
      }
      else {
        res.json(profiles);
      }
    });
  });

module.exports = profileRoutes;