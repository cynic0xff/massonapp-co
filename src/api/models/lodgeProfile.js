const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let LodgeProfile = new Schema({
  lodgeNumber: {
    type: Number
  },
  lodgeName: {
    type: String
  },
  district: {
    type: String
  },
  address: {
    type: String
  },
  address1: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  country: {
    type: String
  },
  phone: {
    type: String
  }
},{
    collection: 'Profile'
});

module.exports = mongoose.model('LodgeProfile', LodgeProfile);