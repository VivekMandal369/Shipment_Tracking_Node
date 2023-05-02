const mongoose = require('mongoose');

const trackingDetails = new mongoose.Schema({
  tracking_number: {
    type: String,
    required: true
  },
  partner_id: {
    type: String,
    required: true
  },
  cycle: {
    type: [String],
    required: true
  },
  api_response: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('tracking_details', trackingDetails);
