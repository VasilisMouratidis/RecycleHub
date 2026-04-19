// controllers/recyclingPointsController.js
const RecyclingPoint = require('../models/RecyclingPoint');

// Επιστρέφει όλα τα σημεία ανακύκλωσης
exports.getAllRecyclingPoints = async (req, res) => {
  try {
    const points = await RecyclingPoint.find();
    res.status(200).json(points);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
