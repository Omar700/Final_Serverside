/*==================================================
/routes/students.js

It defines all the students-related routes.
==================================================*/
// Import Express module
const express = require('express');
// Create an Express router function called "router"
const router = express.Router();
// Import database models
const { Student, Campus } = require('../database/models');

// Import a middleware to replace "try and catch" for request handler, for a concise coding (fewer lines of code)
const ash = require('express-async-handler');

/* GET ALL STUDENTS */
// Automatically catches any error and sends to Routing Error-Handling Middleware (app.js)
// It is the same as using "try-catch" and calling next(error)
router.get('/', ash(async (req, res) => {
  const students = await Student.findAll({ include: [Campus] });
  res.status(200).json(students);  // Status code 200 OK - request succeeded
}));

/* GET STUDENT BY ID */
router.get('/:id', ash(async (req, res) => {
  const student = await Student.findByPk(req.params.id, { include: [Campus] });
  if (!student) {
    return res.status(404).send("Student not found");
  }
  res.status(200).json(student);  // Status code 200 OK - request succeeded
}));

/* ADD NEW STUDENT */
router.post('/', ash(async (req, res) => {
  const newStudent = await Student.create(req.body);
  res.status(201).json(newStudent);  // Status code 201 Created - resource created
}));

/* DELETE STUDENT */
router.delete('/:id', ash(async (req, res) => {
  const deleted = await Student.destroy({ where: { id: req.params.id } });
  if (deleted) {
    res.status(204).end();  // Status code 204 No Content - successful deletion
  } else {
    res.status(404).send("Student not found");
  }
}));

/* EDIT STUDENT */
router.put('/:id', ash(async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  if (!student) {
    return res.status(404).send("Student not found");
  }
  await student.update(req.body);
  res.status(200).json(student);  // Status code 200 OK - resource updated
}));

// Export router, so that it can be imported to construct the apiRouter (app.js)
module.exports = router;
