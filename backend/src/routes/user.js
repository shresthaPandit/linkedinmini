const express = require('express');
const { getUserProfile, updateProfile } = require('../controller/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:userId', getUserProfile);
router.put('/profile', auth, updateProfile);

module.exports = router;