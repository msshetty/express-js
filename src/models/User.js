const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true,
    select: true
  },
  phone: {
    type: Number,
    required: false
  },
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: false
  },
  role: {
    type: String,
    required: false
  },
  profile: {
    type: String,
    required: false,
  },
  status:{
    type: Number,
    default:1
  },
  verified:{
    type: Number,
    default:0
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
module.exports = User = mongoose.model('User', Schema);