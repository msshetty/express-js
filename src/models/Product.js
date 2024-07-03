const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false
  },
  image: {
    type: String,
    required: false,
  },
  status:{
    type: Number,
    default:1
  },
  created_at: {
    type: Date,
    default:Date.now
  },
  updated_at: {
    type: Date
  }
  
});

// Schema.plugin(require('@meanie/mongoose-to-json'));
module.exports = Product = mongoose.model('Product', Schema);