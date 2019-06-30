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
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  ea_date: {
    type: String
  },
  fc_date: {
    type: String
  },
  mm_date: {
    type: String
  },
  lodge_positions: [{
    type: String
  }],
  officer_role: {
    type: String
  }
},{
    collection: 'Profile'
});

module.exports = mongoose.model('Profile', Profile);