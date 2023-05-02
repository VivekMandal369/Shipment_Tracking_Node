const mongoose = require('mongoose');

const dynamicInfo = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('dynamic_info', dynamicInfo);
