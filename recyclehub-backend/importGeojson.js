// importGeojson.js
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const RecyclingPoint = require('./models/RecyclingPoint');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

async function importGeoJSON() {
  try {
    const geojsonData = JSON.parse(fs.readFileSync('./thesis-kadon-wgs84.geojson', 'utf8'));

    const recyclingPoints = geojsonData.features.map((feature, index) => ({
      name: feature.properties.Layer || `Κάδος #${index + 1}`,
      address: feature.properties.Handle || `Κωδικός #${index + 1}`,
      location: {
        type: feature.geometry.type,
        coordinates: feature.geometry.coordinates.slice(0, 2), // Μόνο lat, lng
      },
      categories: [feature.properties.Layer],
      ratings: []
    }));

    await RecyclingPoint.deleteMany({});
    await RecyclingPoint.insertMany(recyclingPoints);

    console.log('✅ GeoJSON data successfully imported!');
  } catch (error) {
    console.error('❌ Error importing data:', error);
  } finally {
    mongoose.connection.close();
  }
}

importGeoJSON();
