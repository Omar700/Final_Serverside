/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://placehold.co/300x200'
  }
});

module.exports = Campus;