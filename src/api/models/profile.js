const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Profile = new Schema({
  first_name: {
    type: String
  },
  middle_name: {
    type: String
  },
  last_name: {
    type: String
  }
},{
    collection: 'Profile'
});

module.exports = mongoose.model('Profile', Profile);