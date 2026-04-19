// seed.js
const mongoose = require('mongoose');
require('dotenv').config();

const RecyclingPoint = require('./models/RecyclingPoint');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const seedData = [
  {
    name: 'Κάδος Ανακύκλωσης Πλαστικού',
    address: 'Οδός Αθηνάς 20, Αθήνα',
    location: {
      type: 'Point',
      coordinates: [23.7275, 37.9838] // (lng, lat)
    },
    categories: ['πλαστικό'],
    ratings: []
  },
  {
    name: 'Κάδος Ανακύκλωσης Χαρτιού',
    address: 'Οδός Σταδίου 15, Αθήνα',
    location: {
      type: 'Point',
      coordinates: [23.7300, 37.9812]
    },
    categories: ['χαρτί'],
    ratings: []
  }
];

async function seedDB() {
  await RecyclingPoint.deleteMany({});
  await RecyclingPoint.insertMany(seedData);
  console.log('✅ Data seeded successfully!');
  mongoose.connection.close();
}

seedDB();
