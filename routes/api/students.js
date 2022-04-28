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

async function getStudent(req, res, next) {
  let student
  try {
    student = await student.findById(req.params.id)
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.student = student
  next()
}

module.exports = router;
