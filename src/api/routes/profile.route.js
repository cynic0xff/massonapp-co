const express = require('express');
const app = express();
const profileRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../models/Profile');

profileRoutes.route('/add').post((req, res) => {
    profile.save()
    .then(profile => {
        res.status(200).json({'Profile': 'Has been saved'});
    })
    .catch(err => {
        res.status(400).send('Unable to save profile');
    });
});

module.exports = profileRoutes;