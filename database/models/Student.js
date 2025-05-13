/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true  
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://placehold.co/200x200'
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;