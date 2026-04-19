// models/RecyclingPoint.js
const mongoose = require('mongoose');

const RecyclingPointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  categories: [String],
  ratings: [
    {
      user: String,
      score: Number,
      comment: String
    }
  ]
});

RecyclingPointSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('RecyclingPoint', RecyclingPointSchema);
