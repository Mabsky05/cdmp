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

});

const Marker = model('Marker', markerSchema);

module.exports = Marker;
