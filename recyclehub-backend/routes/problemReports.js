// routes/problemReports.js
const express = require('express');
const router = express.Router();
const problemReportsController = require('../controllers/problemReportsController');

router.post('/', problemReportsController.createProblemReport);

module.exports = router;
