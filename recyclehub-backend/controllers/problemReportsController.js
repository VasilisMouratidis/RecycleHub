// controllers/problemReportsController.js
const ProblemReport = require('../models/ProblemReport');

exports.createProblemReport = async (req, res) => {
  try {
    const newReport = new ProblemReport({
      recyclingPointId: req.body.recyclingPointId,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
