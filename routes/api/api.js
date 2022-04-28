const express = require('express');
const router = express.Router();
const Student = require('../../models/student');

// Getting all
router.get('/', async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getStudent, (req, res) => {
  res.json(res.student)
})

module.exports = router;
