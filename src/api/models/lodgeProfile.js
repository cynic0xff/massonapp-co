const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let LodgeProfile = new Schema({
  lodgeName: {
    type: String
  },
},{
    collection: 'Profile'
});

module.exports = mongoose.model('LodgeProfile', LodgeProfile);