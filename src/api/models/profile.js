const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let profile = new Schema({
    first_name: String
}, {
    collection: 'Profile'
});