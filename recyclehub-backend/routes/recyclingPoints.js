// routes/recyclingPoints.js
const express = require('express');
const router = express.Router();
const recyclingPointsController = require('../controllers/recyclingPointsController');

// GET όλα τα σημεία ανακύκλωσης
router.get('/', recyclingPointsController.getAllRecyclingPoints);

module.exports = router;
