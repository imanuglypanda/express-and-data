const express = require('express');
const router = express.Router();
const Student = require('../../models/student');

// Getting all
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get('/:id', getStudent, (req, res) => {
  res.json(res.student);
});

// Creating one
router.post('/', async (req, res) => {
  const student = new Student({
    studentID: req.body.studentID,
    studentName: req.body.studentName
  })
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  };
});

// Updating One
router.patch('/:id', getStudent, async (req, res) => {
  if (req.body.studentID != null) {
    res.student.studentID = req.body.studentID;
  }
  if (req.body.studentName != null) {
    res.student.studentName = req.body.studentName;
  }
  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete('/:id', getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: 'Deleted student'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.student = student;
  next();
};

module.exports = router;
