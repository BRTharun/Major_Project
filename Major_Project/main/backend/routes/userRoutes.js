// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');
const dietitianController = require('../controllers/dietitianController');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

// Protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

router.get('/profile/:userId', dietitianController.getNormalUserProfile);

// Get the diet details of a normal user by ID (for dietitians)
router.get('/diet/:userId', dietitianController.getNormalUserDiet);

module.exports = router;
