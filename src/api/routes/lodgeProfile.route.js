const express = require('express');
const app = express();
const lodgeProfilesRoutes = express.Router();

//require Product model in our routes module
let LodgeProfile = require('../models/LodgeProfile');

//routes
lodgeProfilesRoutes.route('/add').post(function(req, res) {
    let lodgeProfile = new LodgeProfile(req.body);

    console.log(`Saving data: ${lodgeProfile}`);

    //save the lodge profile
    lodgeProfile.save()
    .then(lodgeProfile => {
        res.status(200).json({'Lodge Profile': 'success'});
    })
    .catch(err => {
        res.status(400).send('Unable to save profile');
    });
    
});

// define get data(index or listing) route
lodgeProfilesRoutes.route('/').get(function (req, res) {
    LodgeProfile.find(function (err, profiles){
      if(err){
        console.log(err);
      }
      else {
        res.json(profiles);
      }
    });
  });

module.exports = lodgeProfilesRoutes;