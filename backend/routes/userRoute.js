const express = require('express');
const { signup, login } = require('../Controllers/user-controller');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('fname lname email');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
