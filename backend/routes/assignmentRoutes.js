const express = require('express');
const router = express.Router();

// GET assignments for tutor
router.get('/tutor/:tutorId', async (req, res) => {
  try {
    // Placeholder: return empty array or implement actual DB query
    res.json([]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/student/:studentId', async (req, res) => {
    try {
      const assignments = await Assignment.find({
        student: req.params.studentId
      }).populate('course', 'name');
      
      res.json(assignments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
module.exports = router;
