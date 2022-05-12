const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const markerSchema = new Schema({
  place_name: {
    type: String,
  },
  comments: {
    type: String,
  },
  username: {
    type: String,
  },
  long: {
    type: Number,
  },
  lat: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Marker = model('Marker', markerSchema);

module.exports = Marker;
