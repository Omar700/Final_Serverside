/*==================================================
/routes/campuses.js

It defines all the campuses-related routes.
==================================================*/
// Import Express module
const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database/models");

// GET /api/campuses - get all campuses
router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

// GET /api/campuses/:id - get single campus with students
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      include: Student,
    });
    if (campus) res.json(campus);
    else res.status(404).send("Campus not found");
  } catch (err) {
    next(err);
  }
});

// POST /api/campuses - create new campus
router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(201).json(newCampus);
  } catch (err) {
    next(err);
  }
});

// PUT /api/campuses/:id - update campus
router.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (!campus) return res.status(404).send("Campus not found");

    await campus.update(req.body);
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/campuses/:id - delete campus
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Campus.destroy({ where: { id: req.params.id } });
    if (deleted) res.status(204).end();
    else res.status(404).send("Campus not found");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
