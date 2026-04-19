// models/ProblemReport.js
const mongoose = require('mongoose');

const ProblemReportSchema = new mongoose.Schema({
  recyclingPointId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RecyclingPoint',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: String,
  reportedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProblemReport', ProblemReportSchema);
