const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
const recyclingPointsRoute = require('./routes/recyclingPoints');
app.use('/api/recycling-points', recyclingPointsRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
);

const problemReportsRoute = require('./routes/problemReports');
app.use('/api/problem-reports', problemReportsRoute);